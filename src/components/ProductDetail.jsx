import React, { useEffect, useRef } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import gsap from "gsap";

export default function ProductDetail() {
  const navigate = useNavigate();
  const { state } = useLocation();  // ✅ Extract 'state' from location
  const { id } = useParams();
  const product = state?.product;
  
  
  const videoRef = useRef(null);
  const banner = useRef(null);
  const content = useRef(null);
  const cta = useRef(null);

  // ✅ FIXED: Complete titleMap object with proper syntax
  const getVideoFileName = (productTitle) => {
    const titleMap = {
      "Royale Pass Season 11": "rpa11",
      "Royale Pass Season 14": "rpa14", 
      "Royale Pass Season 15": "rpa15",
      "Royale Pass Season 19": "rpa19"
    };
    
    return titleMap[productTitle] || null; // ✅ Added missing semicolon and || null
  }; // ✅ Added missing closing brace

  const videoFileName = product ? getVideoFileName(product.title) : null; // ✅ Moved outside function

  useEffect(() => {
    // GSAP animations
    const tl = gsap.timeline();
    tl.fromTo(
      banner.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1, ease: "power3.out" }
    )
      .fromTo(
        content.current,
        { opacity: 0, y: 80 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.5"
      )
      .fromTo(
        cta.current,
        { opacity: 0, scale: 0.5 },
        { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.7)" },
        "-=0.3"
      );

    // Video lifecycle management
    const video = videoRef.current;
    if (video && videoFileName) {
      const playVideo = async () => {
        try {
          video.muted = false;
          video.volume = 0.7;
          await video.play();
        } catch (error) {
          console.log("Video autoplay failed:", error);
        }
      };
      
      playVideo();

      return () => {
        if (video) {
          video.pause();
          video.currentTime = 0;
          video.muted = true;
        }
      };
    }
  }, [videoFileName]);

  // Fallback if user hits URL directly
  if (!product) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 text-center">
          <h1 className="text-2xl font-bold text-yellow-400 mb-4">
            Product Not Found
          </h1>
          <p className="text-gray-300 mb-6">
            This page was opened directly, so we don't have product data to
            show. Please return to the product list.
          </p>
          <button
            onClick={() => navigate("/products")}
            className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded"
          >
            ← Back to Products
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero banner with video */}
      <div ref={banner} className="relative h-96 md:h-[500px] overflow-hidden">
        {videoFileName ? (
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            loop
            playsInline
            controls
          >
            <source src={`/videos/${videoFileName}.mp4`} type="video/mp4" />
            <source src={`/videos/${videoFileName}.webm`} type="video/webm" />
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover"
            />
          </video>
        ) : (
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover"
          />
        )}
        
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto max-w-4xl">
            <span className="inline-block px-3 py-1 bg-yellow-500 text-black text-sm font-semibold rounded-full mb-4">
              {product.type}
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
              {product.title}
            </h1>
            <p className="text-2xl md:text-3xl font-bold text-yellow-400">
              {product.price}
            </p>
          </div>
        </div>
      </div>

      {/* Details */}
      <div
        ref={content}
        className="container mx-auto px-8 py-12 max-w-4xl space-y-10"
      >
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 shadow-xl">
          <h2 className="text-2xl font-bold text-yellow-400 mb-6">
            What's Included
          </h2>

          <ul className="list-disc list-inside space-y-2 text-gray-200">
            {product.perks.map((perk, idx) => (
              <li key={idx}>{perk}</li>
            ))}
          </ul>
        </div>

        {/* Video info section */}
        {videoFileName && (
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 shadow-xl">
            <h3 className="text-xl font-bold text-yellow-400 mb-3">
              Preview Video
            </h3>
            <p className="text-gray-300">
              Watch the exclusive preview of {product.title} features and content above.
              The video includes all the exciting elements you'll get with this pass!
            </p>
          </div>
        )}

        {/* Call to action */}
        <div ref={cta} className="flex flex-col sm:flex-row gap-4">
          <button className="flex-1 bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-4 px-6 rounded-lg transition-transform duration-300 hover:scale-105">
            Purchase Now
          </button>
          <button
            onClick={() => navigate("/products")}
            className="flex-1 bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-6 rounded-lg border border-white/20 transition-transform duration-300 hover:scale-105"
          >
            ← Back to Products
          </button>
        </div>
      </div>
    </div>
  );
}
