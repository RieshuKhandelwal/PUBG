import React from "react";

const sectionTitle =
  "text-2xl md:text-3xl font-bold text-violet-600 mb-2 mt-8 tracking-tight";
const subTitle =
  "text-lg md:text-xl font-semibold text-blue-500 mt-6 mb-2";
const paragraph = "text-base md:text-lg text-gray-800 mb-4";
const list = "list-disc ml-6 mb-4 text-gray-700";

const PrivacyPolicy = () => (
  <div className="w-full min-h-screen bg-gradient-to-br from-violet-50 to-blue-100 py-10 px-4 md:px-16">
    <div className="max-w-4xl mx-auto bg-white/90 rounded-2xl shadow-xl p-8 md:p-12">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-violet-700 mb-6 drop-shadow-lg">
        Privacy Policy
      </h1>
      <p className={paragraph}>
        <span className="font-semibold text-violet-700">KRAFTON, Inc.</span> (“we”, “our”, “Company” or “us”) collect, use, and process information about you (“you”, “user”, or “player”). We provide various services related to the Game (i.e. game, website, event, survey, Esports, or customer service) ("Games and Services"). This Privacy Policy (“Policy”) covers the personal information that is provided, collected, or generated when you access, use, or subscribe to our Games and Services, except where separate privacy policies or terms and conditions apply.
      </p>
      <p className={paragraph}>
        This Policy applies to our Games and Services, and explains the rights and choices you have with respect to this data, and how you can communicate with us. This Policy does not apply to and cannot control activities when you click or visit to other sites from our Game and Services.
      </p>
      <p className={paragraph}>
        We will occasionally update this Policy. When we do, we will revise the effective date above. While we will periodically inform you of this Policy or any material changes to it, your continued use of our Games and Services after such changes means you accept the Policy as revised. We encourage you to periodically review this Policy to stay informed about how we collect and process your personal information.
      </p>

      <h2 className={sectionTitle}>1. What Information Do We Collect</h2>
      <p className={paragraph}>
        We will collect the following categories of information that may directly or indirectly identify or describe you or your device or information that may be reasonably capable of being associated with or reasonably linked to you or your device. The information you provide to us may differ depending on the circumstances. For example, these include:
      </p>
      <ul className={list}>
        <li>
          <span className="font-semibold">Identifiers:</span> SteamID64, nickname, name, IP address, email address, postal address, phone number, date of birth, gender, country of residence, language, nationality, etc.
        </li>
        <li>
          <span className="font-semibold">Device or Network Information:</span> device model, OS version, MAC address, device ID, etc.
        </li>
        <li>
          <span className="font-semibold">Game information:</span> crash report and system activity details (game setting, play date/time, etc.)
        </li>
        <li>
          <span className="font-semibold">Purchase information:</span> purchase date, items, etc.
        </li>
      </ul>
      <p className={paragraph}>
        When you participate in social features (such as in-game chat), the information that you disclose is public information. We may store and access it, and it may be read, copied, collected, or used by other users without your consent.
      </p>
      <p className={paragraph}>
        We use this data to operate and improve our Game and Services. Some of this information is collected through our use of cookies and related online tools/technologies. See our “Cookies and Related Technologies” section below for more information.
      </p>

      <h2 className={sectionTitle}>2. How We Use Your Information</h2>
      <ul className={list}>
        <li>To operate and provide our Games and Services</li>
        <li>To develop new games, improve the quality of our Games and Services, and fix bugs</li>
        <li>To detect and act upon the illegal or unauthorized use of our Games and Services</li>
        <li>To manage inquiries and requests from you (e.g. refund items in-game, etc.)</li>
        <li>To provide advertising information and other information on marketing and promotional events and surveys</li>
        <li>To track usage patterns, analyze trends of users, and calculate statistics on Games and Services</li>
        <li>To prepare user statistics and provide in-game metrics (such as a leaderboard)</li>
        <li>To operate Esports and provide opportunities participate in tournament(s)</li>
        <li>To participate in partnership programs</li>
        <li>To prevent, detect, identify, investigate, and respond to potential or actual claims, liabilities, prohibited behavior, cheating, hacking or criminal activity</li>
        <li>To comply with and enforce legal requirements, agreements, and policies</li>
      </ul>
      <p className={paragraph}>
        Most of the time, our processing of your personal information is necessary to respond to you or process your request. We may also process your information to comply with a relevant legal obligation. From time to time, we may ask for your consent to use your information for specific reasons. Where consent was provided and is required, you may withdraw your consent at any time by contacting us at the address provided in this Policy.
      </p>

      <h2 className={sectionTitle}>3. How We Share Your Information</h2>
      <p className={paragraph}>
        We share certain personal information with third parties to provide our Games and Services to you, including service providers that process personal information on behalf of us to provide our Games and Services to you, like customer support and to manage our community. Some examples of these third parties are provided below. But we do not share your information with third parties for cross-context behavioral advertising.
      </p>
      <ul className={list}>
        <li>Third party program restriction providers to block cheating tools and unauthorized programs</li>
        <li>Cloud computing service providers to provide cloud storage services</li>
        <li>Payment service providers to assist with payment for transactions or providing withdrawing service for sellers</li>
        <li>Marketing platforms and analytics services providers relating to player behavior, in order to tailor the Service and to conduct marketing activities (such as a leaderboard)</li>
        <li>Online survey service providers in order to improve the game service</li>
        <li>Customer service providers to manage users’ inquiries</li>
        <li>Real-time text/voice transmission platform providers to provide chat services</li>
        <li>Esports events providers to hold and operate the Esports events</li>
      </ul>
      <p className={paragraph}>
        We may share your information where such disclosure is essential to comply with a legal obligation or a lawful data access request, pursuant to a merger or acquisition, with our affiliates (<a href="https://krafton.com/en/studios/" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">see list</a>) for the purposes described in this Policy, or where you have otherwise provided your consent or at your direction.
      </p>

      <h2 className={sectionTitle}>4. Cookies and Related Technologies</h2>
      <p className={paragraph}>
        We use cookies, and other technologies to recognize your browser or device, learn more about your interests, and provide you with essential features and services and for additional purposes. Approved third parties may also set cookies and related technologies when you use our Games and Services.
      </p>
      <p className={paragraph}>
        Cookies are small files downloaded to your device (if your browser is enabled to accept cookies) to track movements within websites and to customize your experience within the website. Most Internet browsers will allow you to erase cookies from your device hard drive, block acceptance of cookies, or receive a warning before a cookie is stored. You should refer to your browser instructions or “Help” screen to learn more about how to manage cookies. Please note, however, that if you block cookies, some portions of our websites may not function properly.
      </p>
      <p className={paragraph}>
        We use third parties analytics service to improve Services and your experience. Analytics services providers could collect your activity data during use our Games and/or Services. However, we do not allow the collection or access to information that directly identifies you, such as your name, email address, etc. You can find the information you need to manage collecting your data on the below.
      </p>
      <ul className={list}>
        <li>
          Google Analytics:{" "}
          <a
            href="https://tools.google.com/dlpage/gaoptout"
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://tools.google.com/dlpage/gaoptout
          </a>
        </li>
      </ul>
      <p className={paragraph}>
        We also strive to provide a safe and fair gaming environment for all players. When you play the Game, we or third parties may use cookies and similar technologies, or collect data about your machine or device, for fraud prevention, security, and authentication purposes.
      </p>

      <h2 className={sectionTitle}>5. International Data Transfers</h2>
      <p className={paragraph}>
        We operate globally and to provide our Games and Services may transfer your data to countries and other regions outside of the country where you are located. If your personal information is transferred, stored, or processed by us, we take reasonable steps to safeguard the privacy of your personal information, including entering confidentiality and standard contractual clauses with vendors where appropriate. Additional information concerning the international transfer of your information is available depending on your region. See the supplemental terms section below for more information.
      </p>

      <h2 className={sectionTitle}>6. Retaining and Deleting Personal Information</h2>
      <p className={paragraph}>
        In principle, we will remove your personal information without delay after the purpose of collecting personal information is achieved. Personal information stored in physical form will be shredded or incinerated, and personal information stored electronically will be removed using technical measures in a way that the information cannot be reproduced. However, we may retain your personal information even after you have closed your account with us or we have ceased providing Services to you, if retention of your personal information is reasonably necessary to comply with our legal obligations, meet regulatory requirements, resolve disputes, prevent fraud, cheating or abuse, or enforce this Policy or any other agreement we may have with a player.
      </p>

      <h2 className={sectionTitle}>7. Our Policy Concerning Children</h2>
      <p className={paragraph}>
        This Game and/or Service are not intended for underage users. Thus, we do not knowingly collect, use, or share any information about them. When we process the child’s information under 14, we will be obtaining consent from parents or guardians for the collection of personal information from their children before they are using our Games and Services. If you are a parent or guardian and you believe your child has provided us with information, you can contact us and request your child’s information to be deleted from our system.
      </p>

      <h2 className={sectionTitle}>8. Links and Third-Party Services</h2>
      <p className={paragraph}>
        If you click on a link to a third-party website, including, without limitation, an advertisement, you will leave our website and go to the website you selected. Because we cannot control the activities of third parties, we cannot guarantee that they will adhere to the same privacy and security practices as we do. We encourage you to review the privacy policies of any other service provider from whom you request services. If you visit a third-party website that is linked to our Games and Services, you should consult that site’s privacy policy before providing any personal information.
      </p>

      <h2 className={sectionTitle}>9. Security of Your Information</h2>
      <p className={paragraph}>
        We have put in place appropriate security measures, including encryption and de-identification, to protect your personal information. In addition, we limit access to your personal information to those employees, agents, persons, or companies who have a business need to know or access the information. They will only process your personal information on our instructions, and they are subject to a duty of confidentiality where appropriate. Please note, however, that no data transmission over the internet is 100% secure, and that complete security of any information we collect and use therefore cannot be guaranteed. Our information protection activities are annually audited by external authorities consistent with the Korean information security standard ISMS-P (Personal Information & Information Security Management System).
      </p>

      <h2 className={sectionTitle}>10. Your Privacy Rights</h2>
      <p className={paragraph}>
        Subject to limitations in applicable law, you are entitled to object to or request the restriction of processing of your personal information, and to request access to, rectification, erasure, and portability of your own personal information. To make a request concerning your rights or if you have any other question, please contact us by sending an email to the address specified in the “13. Contact Us” section. We respond to all requests we receive from individuals wishing to exercise their data protection rights in accordance with applicable data protection laws.
      </p>
      <p className={paragraph}>
        <span className="font-semibold">The result of handling privacy rights requests submitted by player globally during 2023 are as follows:</span>
      </p>
      <ul className={list}>
        <li>
          <span className="font-semibold">Rights to access</span>
          <ul className="list-disc ml-8">
            <li>Requests received: 19</li>
            <li>Requests completed in Whole or in Part: 19</li>
            <li>Requests Denied: 0</li>
            <li>Average days to complete: 4.6 days</li>
          </ul>
        </li>
        <li>
          <span className="font-semibold">Rights to deletion</span>
          <ul className="list-disc ml-8">
            <li>Requests Received: 245</li>
            <li>Requests Completed in Whole or in Part: 245</li>
            <li>Requests Denied: 0</li>
            <li>Average days to complete: 7.5 days</li>
          </ul>
        </li>
        <li>
          <span className="font-semibold">Rights to opt-out of Selling</span>
          <ul className="list-disc ml-8">
            <li>Requests Received: 1</li>
            <li>Requests Completed in Whole or in Part: 1</li>
            <li>Requests Denied: 0</li>
            <li>Average days to complete: 4 days</li>
          </ul>
        </li>
      </ul>

      <h2 className={sectionTitle}>11. Amendments</h2>
      <p className={paragraph}>
        We may amend, at our discretion, any portion of this Policy at any time by posting or displaying the amended Policy on our Games and Services. If we make material changes, we will post a prominent notice on our websites or in our Games and Services or give you other reasonable notice before any material changes take effect. All other changes are effective upon posting.
      </p>

      <h2 className={sectionTitle}>12. Contact Us</h2>
      <p className={paragraph}>
        If you have any questions about this Policy, or your dealings with our Games and Services, please contact us by sending an email to <a href="mailto:privacy@krafton.com" className="text-blue-600 underline">privacy@krafton.com</a>.
      </p>
      <p className={paragraph}>
        This Privacy Policy has been translated into other languages for your convenience. In case of any discrepancies between the English version and the other versions, the English version shall prevail. However, Korean Privacy Policy shall prevail for users based in Korea.
      </p>

      <h2 className={sectionTitle}>Appendix. SUPPLEMENTAL TERMS – JURISDICTION SPECIFIC</h2>
      <h3 className={subTitle}>1. EEA and UK</h3>
      <p className={paragraph}>
        If you are in the European Economic Area (EEA) or the UK, you may lodge a complaint with an applicable data protection authority for your country or region where an alleged infringement of applicable data protection law occurs.
      </p>
      <p className={paragraph}>
        Our representative in the EU is VeraSafe Netherlands BV, located at Keizersgracht 555, 1017 DR Amsterdam, Netherlands. To contact them, please use the form available <a href="https://verasafe.com/public-resources/contact-data-protection-representative" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">here</a>.
      </p>
      <p className={paragraph}>
        Our representative in the UK is VeraSafe United Kingdom Ltd., located at 37 Albert Embankment, London SE1 7TL, United Kingdom. To contact them, please use the form available <a href="https://verasafe.com/public-resources/contact-data-protection-representative" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">here</a>.
      </p>
      <ul className={list}>
        <li>
          <span className="font-semibold">International Data Transfer:</span> If we transfer your data outside of the EEA to a country that is not recognized by the European Commission as ensuring an adequate level of data protection, we endeavor to apply suitable measures to safeguard your personal data in accordance with applicable data protection and privacy laws.
        </li>
        <li>
          <span className="font-semibold">Your Privacy Rights:</span> You have a right to lodge a complaint with the appropriate data protection authority if you have concerns about how we process your personal information.
        </li>
      </ul>

      <h3 className={subTitle}>2. India</h3>
      <ul className={list}>
        <li>
          <span className="font-semibold">Our Policy Concerning Underage Users:</span> This Game and/or Service are not intended for underage users. Thus, underage users should not use the Game and/or Service unless parental consent is provided.
        </li>
        <li>
          <span className="font-semibold">Sensitive Personal Information:</span> We can collect sensitive information (payment information, Proof ID number, etc.) while we are operating or using Games and/or Service. We collect or process your sensitive personal information after you give us consent.
        </li>
        <li>
          <span className="font-semibold">International data transfers:</span> For Indian users, your personal information will be stored and processed on our secure servers located in India and Singapore.
        </li>
      </ul>

      <h3 className={subTitle}>3. Japan</h3>
      <ul className={list}>
        <li>
          <span className="font-semibold">Joint Use of Your Personal Data:</span> We may use your personal data jointly with our affiliates as described in this Policy.
        </li>
        <li>
          <span className="font-semibold">International Data Transfer:</span> If we transfer your data outside of Japan, we endeavor to apply suitable measures to safeguard your personal data in accordance with applicable data protection and privacy laws.
        </li>
        <li>
          <span className="font-semibold">Your Privacy Rights:</span> You have a right to request disclosure of your personal data retained by us and purpose of use thereof, correction, addition, deletion, and discontinuance of the use and third parties transfer of the Retained Personal Data.
        </li>
        <li>
          <span className="font-semibold">Cookies and Related Technologies:</span> We may use cookies and related technologies when you use our Services to analyze user’s interests and provide you with essential features, etc.
        </li>
      </ul>

      <h3 className={subTitle}>4. United States</h3>
      <ul className={list}>
        <li>
          <span className="font-semibold">Privacy Rights for United States Users:</span> Several U.S. states provide their residents with rights to confirm, access, delete, correct, and opt-out of certain processing of their personal information.
        </li>
        <li>
          <span className="font-semibold">California:</span> If you are a California resident, you may have additional rights as detailed in this Policy. You may exercise these rights by emailing <a href="mailto:privacy@krafton.com" className="text-blue-600 underline">privacy@krafton.com</a> or visiting our support page.
        </li>
      </ul>
    </div>
  </div>
);

export default PrivacyPolicy;