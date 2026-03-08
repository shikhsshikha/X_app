import XLogo from "../../assets/X-logo-black.png";
import BaseFooter from "../BaseFooter";

const PrivacyFooter = () => {
  return (
    <main className="bg-white text-black">

      {/* TOP HEADER */}

      <header className="sticky top-0 z-50 bg-white">
        <div className="max-w-384 mx-auto px-12 h-20 mt-4 flex items-center justify-between">

          {/* Left */}
          <div className="flex items-center gap-2">
            <img src={XLogo} alt="X" className="h-7 w-auto" />
            <span className="text-[23px] font-bold text-black">
              Privacy Policy
            </span>
          </div>

          {/* Right */}
          <div className="flex items-center gap-7">
            <span className="text-[14px] text-black/80 hover:underline cursor-pointer">
              Privacy Settings
            </span>

            <span className="text-[14px] text-black/80 hover:underline cursor-pointer">
              Privacy Center
            </span>

            <span className="text-[14px] text-black/80 hover:underline cursor-pointer">
              Help Center
            </span>

            <span className="text-[14px] text-black/80 hover:underline cursor-pointer">
              Policy Archive
            </span>

            <button className="px-5 py-3 rounded-full border border-black/20 text-[14px] font-medium text-black hover:bg-black/5">
              Download PDF
            </button>
          </div>
        </div>
      </header>


      {/* HERO */}
      <section className="bg-white">

        {/* Big Title */}
        <div className="max-w-384 mx-auto px-12 pt-41 pb-47">
          <h1 className="text-9xl leading-[1.05] font-extrabold text-[#0f1419] max-w-225">
            X Privacy<br />Policy
          </h1>
        </div>

        {/* Dark Bar */}
        <div className="w-8xl mx-2 h-28 bg-linear-to-r from-[#0f1419] via-[#141a1f] to-[#0f1419] flex items-center justify-center">
          <span className="text-white text-[16px] font-semibold">
            Effective: January 15, 2026
          </span>
        </div>
      </section>


      {/* INTRO */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-8 md:px-20 py-28 ">
          <h2 className="text-[35px] font-bold mb-8">
            Before you scroll, read this
          </h2>

          <p className="text-[15px] leading-6 text-black/60 mb-6">
            It’s really hard to make everyone happy with a Privacy Policy. Most
            people who use X want something short and easy to understand.<br /> While
            we wish we could fit everything you need to know into a post, our
            regulators ask us to meet our legal obligations by describing<br /> them
            all in a lot of detail.
          </p>

          <p className="text-[15px] leading-6 text-black/60  mb-6">
            With that in mind, we’ve written our Privacy Policy as simply as possible to empower you to make informed decisions when you use X<br /> by making sure you understand and have control over the information we collect, how it’s used, and when it’s shared. 
          </p>

          <p className="text-[15px] leading-6 text-black/60">
            So if you skip reading every word of the Privacy Policy, at least
            know this:
          </p>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-8  md:px-20 py-5 grid grid-cols-1 md:grid-cols-3 gap-x-20 gap-y-28">
          {[
            ["X is a public platform", "Learn what’s viewable & searchable"],
            ["We collect some data about you", "Learn what we collect & how"],
            ["Affiliate services may have their own policies", "Learn about affiliates"],
            ["We use your data to make X better", "Learn how we make your info work"],
            ["You can control your experience", "Learn how to update your settings"],
            ["If you have questions about how we use data, just ask", "Learn how to contact us"],
          ].map(([title, link], i) => (
            <div key={i}>
              <h3 className="text-[23px] font-bold mb-6">{title}</h3>
              <a
                href="#"
                className="text-[#1d9bf0] font-bold underline"
              >
                {link}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-8 md:px-20 py-28 grid grid-cols-1 md:grid-cols-[260px_1fr] gap-10">
          
          {/* SIDEBAR */}
          <aside className="space-y-4 text-sm sticky font-bold top-28 self-start">
            {[
              "Information We Collect",
              "How We Use Information",
              "Sharing Information",
              "How Long We Keep Information",
              "Take Control",
              "Your Rights And Ours",
              "X’s Audience",
              "Changes To This Privacy Policy",
              "General",
              "How To Contact X",
            ].map((item, i) => (
              <a
                key={i}
                href="#"
                className="block text-[#1d9bf0] hover:underline"
              >
                {i + 1}. {item}
              </a>
            ))}
          </aside>

          {/* CONTENT */}
          <article className="max-w-5xl text-black/80 leading-7">

          {/* ===== 1. Information We Collect ===== */}
          <section>
            {/* 1.1 Information We Collect */}
            <section>
              <h2 className="text-[35px] leading-[1.2] font-bold  text-[#0f1419] mb-6">
                1. Information We Collect
              </h2>

              <p className="text-[15px] leading-[1.7] text-gray-500 mb-8">
                The information we collect when you use X falls into three categories.
              </p>

              <h3 className="text-[15px] font-bold text-[#536471] mb-6">
                1.1 Information you provide us.
              </h3>

              <p className="text-[15px] leading-[1.7] tracking-tight text-gray-500 mb-8">
                To use some of our products and services you need to have an account, and to
                create an account, you need to provide<br /> us certain information. Likewise, if
                you use our paid products and services, we cannot provide them to you without<br />
                getting payment information. Basically, certain information is necessary if
                you want to use many of our products and <br />services.
              </p>

              <ul className="space-y-2 text-[15px] mb-6 leading-[1.7] tracking-tight text-gray-500 list-disc pl-6">
                <li>
                  <span className="font-bold">Personal accounts.</span> If you create an
                  account, you must provide us with some information so that we can provide
                  our services to you. This includes a display name (for example,
                  “Creators”); a username (for example, @XCreators); a password; an email
                  address or phone number; a date of birth; your display language; and
                  third-party single sign-in information (if you choose this sign-in method).
                  You can also choose to share your location in your profile and posts, and
                  to upload your address book to X to help find people you may know. Your
                  profile information, which includes your display name and username, is
                  always public, but you can use either your real name or a pseudonym. And
                  remember, you can create multiple X accounts, for example, to express
                  different parts of your identity, professional or otherwise.
                </li>
                

                <li>
                  <span className="font-bold">Professional Accounts.</span> If you create a 
                  <span className="text-[#1d9bf0] underline">Professional Account</span>, you also need to provide us with a professional
                  category, and may provide us with other information, including street
                  address, contact email address, and contact phone number, all of which will
                  always be public.
                </li>

                <li>
                  <span className="font-bold">Payment information.</span> In order to purchase
                  ads or other offerings provided as part of our paid products and services
                  you will need to provide us payment information, including your credit or
                  debit card number, card expiration date, CVV code, and billing address.
                </li>

                <li>
                  <span className="font-bold">Preferences.</span> When you set your preferences using your <span className="text-[#1d9bf0] underline">settings</span>, we collect that information so that we can respect your preferences.
                </li>

                <li>
                  <span className="font-bold">Biometric information.</span> Based on your consent, we may collect and use your biometric information for safety, security, and identification purposes.
                </li>

                <li>
                  <span className="font-bold">
                    Job applications / recommendations.
                  </span>{" "}
                  We may collect and use your personal information (such as your biographical information, employment history, educational history, employment preferences, skills and abilities, and job search activity and engagement, in addition to the information we already collect as disclosed in the “Information we collect when you use X” section of our Privacy Policy below) to recommend potential jobs to you, to share with potential employers when you apply for a job, to enable connections for professional opportunities, and to show you more relevant advertising.
                </li>
              </ul>
            </section>

            {/* 1.2 Information we collect when you use X. */}
            <section>
              <h3 className="text-[15px] font-bold text-[#536471] mb-6">
                1.2 Information we collect when you use X.
              </h3>

              <p className="text-[15px] leading-[1.7] tracking-tight text-gray-500 mb-8">
                When you use our services, we collect information about how you use our products and services. We use that<br /> information to provide you with products and services, to help keep X more secure and respectful for everyone, and<br /> more relevant to you.
              </p>

              <p className="text-[15px] leading-[1.7] tracking-tight text-gray-500 mb-6">
                <span className="font-bold ">Usage information.</span> We collect information about your activity on X, including:
              </p>
              
              <ul className="space-y-2 text-[15px] mb-6 leading-[1.7] tracking-tight text-gray-500 list-disc pl-6">
                <li>Posts and other content you post (including the date, application, and version of X) and information about your broadcast activity (e.g., Spaces), including broadcasts you’ve created and when you created them, your lists, bookmarks, and Communities you are a part of.
                </li>
                <li>
                  Your interactions with other users’ content, such as reposts, likes, bookmarks, shares, downloads, replies, if other users mention or tag you in content or if you mention or tag them, and broadcasts you’ve participated in (including your viewing history, listening, commenting, speaking, and reacting).
                </li>
                <li>
                  How you interact with others on the platform, such as people you follow and people who follow you, metadata related to <span className="text-[#1d9bf0] underline">Encrypted Messages</span>, and when you use <span className="text-[#1d9bf0] underline">Direct Messages</span>, including the contents of the messages, the recipients, and date and time of messages.
                </li>
                <li>
                  If you communicate with us, such as through email, we will collect information about the communication and its content.
                </li>
                <li>
                  We collect information on links you interact with across our services (including in our emails sent to you).
                </li>
              </ul>

              <p className="text-[15px] leading-[1.7] tracking-tight text-gray-500 mb-8">
                <span className="font-bold">Purchase and payments.</span> To allow you to make a payment or send money using X features or services, including through an intermediary, we may receive information about your transaction such as when it was made, when a subscription is set to expire or auto-renew, and amounts paid or received.
              </p>

              <p className="text-[15px] leading-[1.7] tracking-tight text-gray-500 mb-6">
                <span className="font-bold">Device information.</span> We collect information from and about the devices you use to access X, including:
              </p>

              <ul className="space-y-2 text-[15px] mb-6 leading-[1.7] tracking-tight text-gray-500 list-disc pl-6">
                <li>
                  Information about your connection, such as your IP address, browser type, and related information.
                </li>
                <li>
                  Information about your device and its settings, such as device and advertising ID, operating system, carrier, language, memory, apps installed, and battery level.
                </li>
                <li>
                  Your device address book, if you’ve chosen to share it with us.
                </li>
              </ul>

              <p className="text-[15px] leading-[1.7] tracking-tight text-gray-500 mb-6">
                <span className="font-bold">Location information.</span> When you use X, we collect some information about your approximate location to provide the service you expect, including showing you relevant ads. You can also choose to share your current precise location or places where you’ve previously used X by enabling these settings in your account.
              </p>

              <p className="text-[15px] leading-[1.7] tracking-tight text-gray-500 mb-6">
                <span className="font-bold">Inferred identity.</span> We may collect or receive information that we use to infer your identity as detailed below:
              </p>

              <ul className="space-y-2 text-[15px] mb-6 leading-[1.7] tracking-tight text-gray-500 list-disc pl-6">
                <li>
                  When you sign into X on a browser or device, we will associate that browser or device with your account. Subject to your settings, we may also associate your account with browsers or devices other than those you use to sign into X (or associate your signed-out device or browser with other browsers or devices or X-generated identiﬁers).
                </li>
                <li>
                  When you provide other information to X, including an email address or phone number, we associate that information with your X account. Subject to your settings, we may also use this information in order to infer other information about you and/or your identity, for example by associating your account with hashes of email addresses that share common components with the email address you have provided to X.
                </li>
                <li>
                  When you access X and are not signed in, we may infer your identity based on the information we collect.
                </li>
              </ul>

              <p className="text-[15px] leading-[1.7] tracking-tight text-gray-500 mb-6">
                <span className="font-bold">Log information.</span> We may receive information when you view content on or otherwise interact with our products and services, even if you have not created an account or are signed out, such as:
              </p>

              <ul className="space-y-2 text-[15px] mb-6 leading-[1.7] tracking-tight text-gray-500 list-disc pl-6">
                <li>
                  IP address and related information; browser type and language; operating system; the referring webpage; access times; pages visited; location; your mobile carrier; device information (including device and application IDs); search terms and IDs (including those not submitted as queries); ads shown to you on X; X-generated identiﬁers; and identiﬁers associated with cookies. We also receive log information when you click on, view, or interact with links on our services, including when you install another application through X.
                </li>
              </ul>

              <p className="text-[15px] leading-[1.7] tracking-tight text-gray-500 mb-6">
                <span className="font-bold">Advertisements.</span> When you view or interact with ads we serve on or oﬀ X, we may collect information about those views or interactions (e.g., watching a video ad or preroll, clicking on an ad, interacting with reposts of or replies to an ad).
              </p>

              <p className="text-[15px] leading-[1.7] tracking-tight text-gray-500 mb-6">
                <span className="font-bold">Cookies and similar technologies.</span>  Like many websites, we use cookies and similar technologies to collect additional website usage data and to operate our services. Cookies are not required for many parts of our products and services such as searching and looking at public proﬁles. You can learn more about how we use cookies and similar technologies <span className="text-[#1d9bf0] underline">here</span>.
              </p>
              
              <p className="text-[15px] leading-[1.7] tracking-tight text-gray-500 mb-6">
                <span className="font-bold">Interactions with our content on third-party sites.</span>  When you view our content on third-party websites that integrate X content, such as embedded timelines or post buttons, we may receive log information that includes the web page you visited.
              </p>
            </section>
      
            {/* 1.3 Information we receive from third parties. */}
            <section>
              <h3 className="text-[15px] font-bold text-[#536471] mb-6">
                1.3 Information we receive from third parties.
              </h3>

              <p className="text-[15px] leading-[1.7] tracking-tight text-gray-500 mb-6">
                When you use other online products and services, they may share information about that usage with us.
              </p>

              <p className="text-[15px] leading-[1.7] tracking-tight text-gray-500 mb-6">
                <span className="font-bold">Ad partners, developers, and publishers.</span>  Our ad and business partners share information with us such as browser cookie IDs, X-generated identifiers, mobile device IDs, hashed user information like email addresses, demographic or interest data, and content viewed or actions taken on a website or app. Some of our ad partners, particularly our advertisers, also enable us to collect similar information directly from their website or app by integrating our advertising technology. Information shared by ad partners and affiliates or collected by X from the websites and apps of ad partners and affiliates may be combined with the other information you share with X and that X receives, generates, or infers about you described elsewhere in this Privacy Policy.
              </p>

              <p className="text-[15px] leading-[1.7] tracking-tight text-gray-500 mb-6">
                <span className="font-bold">Other third parties, account connections, and integrations.</span>  We may receive information about you from third parties who are not our ad partners, such as other X users, developers, and partners who help us evaluate the safety and quality of content on our platform, our <span className="text-[#1d9bf0] underline">corporate affiliates</span>, and other services you link to your X account. You may choose to connect your X account to your account on another service, and that other service may send us information about your account on that service.
              </p>
            </section>
          </section>
            
            <div className="mt-6 mb-15 h-px w-full bg-gray-400" />
          

          {/* ===== 2. How We Use Information ===== */}
          <section>
            <h2 className="text-[35px] leading-[1.2] font-bold  text-[#0f1419] mb-6">
              2. How We Use Information
            </h2>

            <p className="text-[15px] leading-[1.7] tracking-tight text-gray-500 mb-6">
              Breaking down how we use the information we collect is not simple because of the way the systems that bring our services to you work. For example, the same piece of information may be used differently for different purposes to ultimately deliver a single service. We think it’s most useful to describe the five main ways we use information and if you have questions that are not answered, you can always <span className="text-[#1d9bf0] underline">contact us</span>. Here we go:
            </p>


            {/* 2.1 Information we receive from third parties. */}
            <section>
              <h3 className="text-[15px] font-bold text-[#536471] mb-6">
                2.1 Operate, improve, and personalize our services.
              </h3>

              <p className="text-[15px] leading-[1.7] tracking-tight text-gray-500 mb-6">
                We use the information we collect to provide and operate X products and services. We also use the information we<br /> collect to improve and personalize our products and services so that you have a better experience on X, including by showing you more relevant content and ads, suggesting people and topics to follow, enabling and helping you discover <span className="text-[#1d9bf0] underline">affiliates</span>, third-party apps, and services. We may use the information we collect and publicly available information to<br /> help train our machine learning or artificial intelligence models for the purposes outlined in this policy.
              </p>

              <p className="text-[15px] leading-[1.7] tracking-tight text-gray-500 mb-6">
                We may use the information we collect from accounts of other services that you choose to connect to your X account to provide you features like cross-posting or cross-service authentication, and to operate our services.
              </p>

              <p className="text-[15px] leading-[1.7] tracking-tight text-gray-500 mb-6">
                We use your contact information to help others find your account if your settings permit, including through third-party services and client applications.
              </p>

              <p className="text-[15px] leading-[1.7] tracking-tight text-gray-500 mb-6">
                We use your information to provide our advertising and sponsored content services subject to your <span className="text-[#1d9bf0] underline">settings</span>, which helps make ads on X more relevant to you. We also use this information to measure the effectiveness of ads and to help recognize your devices to serve you ads on and off of X. Some of our ad partners also enable us to collect similar information directly from their website or app by integrating our advertising technology. Information shared by ad partners and affiliates or collected by X from the websites and apps of ad partners and affiliates may be combined with the other information you share with X and that X receives, generates, or infers about you, as described elsewhere in our Privacy Policy.
              </p>
            </section>


            {/* 2.2 Foster safety and security. */}
            <section>
              <h3 className="text-[15px] font-bold text-[#536471] mb-6">
                2.1 Operate, improve, and personalize our services.
              </h3>
              
              <p className="text-[15px] leading-[1.7] tracking-tight text-gray-500 mb-6">
                We use information we collect to provide for the safety and security of our users, our products, services, and your account. This includes verifying your identity, authenticating your account, estimating or verifying your age as may be required under law, and defending against fraud, unauthorized use, and illegal activity. We also use the information to evaluate and affect the safety and quality of content on X - this includes investigating and enforcing our policies and terms, as well as applicable law.
              </p>
            </section>


            {/* 2.3 Measure, analyze and make our services better. */}
            <section>
              <h3 className="text-[15px] font-bold text-[#536471] mb-6">
                2.3 Measure, analyze and make our services better.
              </h3>

              <p className="text-[15px] leading-[1.7] tracking-tight text-gray-500 mb-6">
                We use the information we collect to measure and analyze the effectiveness of our products and services and to better understand how you use them in order to make them better.
              </p>
            </section>


            {/* 2.4 Communicate with you about our services. */}
            <section>
              <h3 className="text-[15px] font-bold text-[#536471] mb-6">
                2.4 Communicate with you about our services.
              </h3>

              <p className="text-[15px] leading-[1.7] tracking-tight text-gray-500 mb-6">
                We use the information we collect to measure and analyze the effectiveness of our products and services and to better understand how you use them in order to make them better.
              </p>
            </section>


            {/* 2.5 Research. */}
            <section>
              <h3 className="text-[15px] font-bold text-[#536471] mb-6">
                2.5 Research.
              </h3>

              <p className="text-[15px] leading-[1.7] tracking-tight text-gray-500 mb-6">
                We use information you share with us, or that we collect to conduct research, surveys, product testing, and troubleshooting to help us operate and improve our products and services.
              </p>
            </section>
          </section>

          <div className="mt-6 mb-15 h-px w-full bg-gray-400" />
     

          {/* ===== 3. Sharing Information ===== */}
          <section>
            <h2 className="text-[35px] leading-[1.2] font-bold  text-[#0f1419] mb-6">
              3. Sharing Information
            </h2>

            <p className="text-[15px] leading-[1.7] tracking-tight text-gray-500 mb-6">
              You should know the ways we share your information, why we share it, and how you can control it. There are five general ways we share your information.
            </p>


            {/* 3.1 When you post and share. */}
            <section>
              <h3 className="text-[15px] font-bold text-[#536471] mb-6">
                3.1 When you post and share.
              </h3>

              <p className="text-[15px] leading-[1.7] tracking-tight text-gray-500 mb-6">
                <span className="font-bold">With the general public.</span> You are directing us to disclose that information as broadly as possible. X content, including<br /> your profile information (e.g., name/pseudonym, username, profile pictures), is available for viewing by the general<br /> public. The public does not need to be signed in to view some content on X. They may also find X content off of X: for example, from search query results on Internet search engines or videos downloaded and reshared elsewhere (depending on your <span className="text-[#1d9bf0] underline">settings</span>).
              </p>

              <p className="text-[15px] leading-[1.7] tracking-tight text-gray-500 mb-6">
                <span className="font-bold">With other X users.</span> Depending on your <span className="text-[#1d9bf0] underline">settings</span>, and based on the X products and services you use, we share:
              </p>

              <ul className="space-y-2 text-[15px] mb-6 leading-[1.7] tracking-tight text-gray-500 list-disc pl-6">
                <li>
                  Your interactions with X content of other users, such as replies, and people you follow.
                </li>
                <li>
                  Content you send to a specific X user, such as through <span className="text-[#1d9bf0] underline">Direct Messages</span>. Please keep in mind that if you’ve shared information like Direct Messages or protected posts with someone else who accesses X through a third-party service, the information may be shared with the third-party service.
                </li>
              </ul>

              <p className="text-[15px] leading-[1.7] tracking-tight text-gray-500 mb-6">
                <span className="font-bold">With partners.</span> Depending on your <span className="text-[#1d9bf0] underline">settings</span>, we also provide certain third parties with information to help us offer or operate our products and services. You can learn more about these partnerships in our <span className="text-[#1d9bf0] underline">Help Center</span>. You can control whether X shares your personal information with these partners by using the “Data sharing with business partners”<br /> option in your <span className="text-[#1d9bf0] underline">Privacy and Safety settings.</span> (This setting does not control sharing described elsewhere in this Privacy Policy, such as when we share information with our service providers, or through partnerships other than as described in this <span className="text-[#1d9bf0] underline">Help Center</span> article.)
              </p>
            </section>


            {/* 3.2 With third parties and third-party integrations. */}
            <section>
              <h3 className="text-[15px] font-bold text-[#536471] mb-6">
                3.2 With third parties and third-party integrations.
              </h3>
              
              <p className="text-[15px] leading-[1.7] tracking-tight text-gray-500 mb-6">
                <span className="font-bold">With service providers.</span> We may share your information with our <span className="text-[#1d9bf0] underline">service providers</span> that perform functions and provide services on our behalf, including payment services providers who facilitate payments; service providers that host our various blogs and wikis; service providers that help us understand the use of our services; applicant tracking system providers to send and receive applicant and job data to potential employers; service providers supporting age assurance solutions; and those that provide fraud detection services. 
              </p>

              <p className="text-[15px] leading-[1.7] tracking-tight text-gray-500 mb-6">
                <span className="font-bold">With advertisers.</span> Y Advertising revenue enables us to provide our products and services. Advertisers may learn information from your engagement with their ads on or off X. For example, if you click on an external link or ad on our services, that advertiser or website operator might figure out that you came from X, along with other information associated with the ad you clicked, such as characteristics of the audience it was intended to reach and other X-generated identifiers for that ad. They may also collect other personal information from you, such as cookie identifiers, or your IP address.
              </p>

              <p className="text-[15px] leading-[1.7] tracking-tight text-gray-500 mb-6">
                <span className="font-bold">Third-party collaborators.</span>  Depending on your <span className="text-[#1d9bf0] underline">settings</span>, or if you decide to share your data, we may share or disclose your information with third parties. If you do not opt out, in some instances the recipients of the information may use it for their own independent purposes in addition to those stated in X’s Privacy Policy, including, for example, to train their artificial intelligence models, whether generative or otherwise. 
              </p>

              <p className="text-[15px] leading-[1.7] tracking-tight text-gray-500 mb-6">
                <span className="font-bold">Through our APIs.</span>  We use technology like <span className="text-[#1d9bf0] underline">APIs</span> and embeds to make public X information available to websites, apps, and others for their use, for example, displaying posts on a news website or analyzing what people say on X. We generally make this content available in limited quantities for free and charge licensing fees for large-scale access. We have <span className="text-[#1d9bf0] underline">standard terms</span> that govern how this information can be used, and a compliance program to enforce these terms. But these individuals and companies are not affiliated with X, and their offerings may not reflect updates you make on X. For more information about how we make public data on X available to the world, visit <span className="text-[#1d9bf0] underline">https://developer.x.com</span>. 
              </p>
            </section>


            {/* 3.3 When required by law, to prevent harm, or in the public interest. */}
            <section>
              <h3 className="text-[15px] font-bold text-[#536471] mb-6">
                3.3 When required by law, to prevent harm, or in the public interest.
              </h3>

              <p className="text-[15px] leading-[1.7] tracking-tight text-gray-500 mb-6">
                We may preserve, use, share, or disclose your information if we believe that it is reasonably necessary to:
              </p>

              <ul className="space-y-2 text-[15px] mb-6 leading-[1.7] tracking-tight text-gray-500 list-disc pl-6">
                <li>comply with a law, regulation, <span className="text-[#1d9bf0] underline">legal process, or governmental request</span>;</li>
                <li>protect the safety of any person, protect the safety or integrity of our platform, including to help prevent spam, abuse, or malicious actors on our services;</li>
                <li>explain why we have removed content or accounts from our services (e.g., for a violation of <span className="text-[#1d9bf0] underline">our Rules</span>);</li>
                <li>address fraud, security, or technical issues; or</li>
                <li>protect our rights or property, or the rights or property of those who use our services.</li>
              </ul>

              <p className="text-[15px] leading-[1.7] tracking-tight text-gray-500 mb-6">
                We may also use different signals and your data to infer, preserve, use, share, or disclose your age and identity information in order to comply with regulatory requirements as well as for safety, security, fraud, know-your-customer, know-your-business, and identity verification, as the case may be. We may also share or disclose your age and identity information with our partners, service providers, and others for these purposes.
              </p>
            </section>


            {/* 3.4 With our affiliates. */}
            <section>
              <h3 className="text-[15px] font-bold text-[#536471] mb-6">
                3.4 With our affiliates.
              </h3>

              <p className="text-[15px] leading-[1.7] tracking-tight text-gray-500 mb-6">
                We may share information amongst our <span className="text-[#1d9bf0] underline">affiliates</span> to provide our products and services.
              </p>
            </section>


            {/* 3.5 As a result of a change in ownership. */}
            <section>
              <h3 className="text-[15px] font-bold text-[#536471] mb-6">
                3.5 As a result of a change in ownership.
              </h3>

              <p className="text-[15px] leading-[1.7] tracking-tight text-gray-500 mb-6">
                We may share, sell, or transfer information about you in connection with a merger, acquisition, reorganization, sale of assets, or bankruptcy. This Privacy Policy will apply to your personal information that is shared with (before and after the close of any transaction) or transferred to the new entity.
              </p>
            </section>
          </section>


          <div className="mt-6 mb-15 h-px w-full bg-gray-400" />
     

          {/* ===== 4. How Long We Keep Information ===== */}
          
          <section>
            <h2 className="text-[35px] leading-[1.2] font-bold  text-[#0f1419] mb-6">
              4. How Long We Keep Information
            </h2>

            <p className="text-[15px] leading-[1.7] tracking-tight text-gray-500 mb-6">
              We keep different types of information for different periods of time, depending on how long we need to retain it in order to provide you with our products and services, to comply with our legal requirements and for safety and security reasons. For example:
            </p>
            
            <ul className="space-y-2 text-[15px] mb-6 leading-[1.7] tracking-tight text-gray-500 list-disc pl-6">
                <li>We keep your profile information, such as your display name, user name, password and email address for the duration of your account. We cannot provide you with our products and services without retaining this information.
                </li>
                <li>We keep your usage information, such as the content you post, your interactions with other users’ content and how you interact with others on the platform for the duration of your account or until such content is removed.
                </li>
                <li>
                  We keep your payment information, including your credit or debit card number and billing address for the duration you use our paid products and services. Records of transactions will be kept for longer, in accordance with applicable law.
                </li>
                <li>
                  If you communicate with us, such as through email, we will keep information about the communication and its content for up to 18 months, unless it is necessary for us to retain it for a longer period to comply with our legal obligations or to exercise or defend our legal rights.
                </li>
                <li>
                  We generally collect device information, location information, inferred identity information and log information using cookies. We keep cookies and information collected using cookies for up to 13 months. You can learn more about how we use cookies and similar technologies <span className="text-[#1d9bf0] underline">here</span>.
                </li>
                <li>
                  We keep information about your views or interactions with ads on or off X, as well as how you interact with our content on third-party sites for up to 12 months. 
                </li>
                <li>
                  We keep information shared by ad and business partners for up to 12 months.
                </li>
                <li>
                  Where you violate our Rules and your account is suspended, we may keep the identifiers you used to create the account (such as your email address or phone number) indefinitely to prevent repeat policy offenders from creating new accounts.
                </li>
              </ul>

              <p className="text-[15px] leading-[1.7] tracking-tight text-gray-500 mb-6">
                We may need to keep certain information longer than our policies specify in order to comply with legal requirements and for safety and security reasons. For example:
              </p>

              <ul className="space-y-2 text-[15px] mb-6 leading-[1.7] tracking-tight text-gray-500 list-disc pl-6">
                <li>
                  <span className="font-bold">To comply with a law, regulation, legal process, or governmental request.</span> Including in order to adhere to a legally appropriate preservation request made by law enforcement. You can read more about law enforcement access <span className="text-[#1d9bf0] underline">here</span>.
                </li>
                <li>
                  <span className="font-bold">In connection with legal claims, litigation, and regulatory matters.</span> Including where it is reasonably necessary to retain information relating to your account in order to defend X against legal claims.
                </li>
                <li>
                  <span className="font-bold">To maintain the safety and security of our products and services.</span> Including where it is necessary to store your information longer in order to investigate and fight abuse on our products and services.
                </li>
              </ul>

              <p className="text-[15px] leading-[1.7] tracking-tight text-gray-500 mb-6">
                Remember public content can exist elsewhere even after it is removed from X. For example, search engines and other third parties may retain copies of your posts longer, based upon their own privacy policies, even after they are deleted or expire on X. You can read more about search visibility <span className="text-[#1d9bf0] underline">here</span>.
              </p>
          </section>


          <div className="mt-6 mb-15 h-px w-full bg-gray-400" />
     

          {/* ===== 5. Take Control ===== */}
          
          <section>
            <h2 className="text-[35px] leading-[1.2] font-bold  text-[#0f1419] mb-6">
              5. Take Control
            </h2>


            {/* 5.1 Access, correction, and portability. */}
            <section>
              <h3 className="text-[15px] font-bold text-[#536471] mb-6">
                5.1 Access, correction, and portability.
              </h3>

              <p className="text-[15px] leading-[1.7] tracking-tight text-gray-500 mb-6">
                You can access, correct, or modify the information you provided to us by editing your profile and adjusting your account <span className="text-[#1d9bf0] underline">settings</span>.
              </p>

              <ul className="space-y-2 text-[15px] mb-6 leading-[1.7] tracking-tight text-gray-500 list-disc pl-6">
                <li>
                  You can learn more about the information we have collected or inferred about you in <span className="text-[#1d9bf0] underline">Your X Data</span> and request access to additional information <span className="text-[#1d9bf0] underline">here</span>.
                </li>
                <li>
                  You can download a copy of your information, such as your posts, by following the instructions <span className="text-[#1d9bf0] underline">here</span>.
                </li>
              </ul>

              <p className="text-[15px] leading-[1.7] tracking-tight text-gray-500 mb-6">
                To protect your privacy and maintain security, we take steps to verify your identity before granting you access to your personal information or complying with a deletion, portability, or other related request. We may, in certain situations, reject your request for access, correction, or portability, for example, we may reject access where you are unable to verify your identity.
              </p>
            </section>


            {/* 5.2 Deleting your information. */}
            <section>
              <h3 className="text-[15px] font-bold text-[#536471] mb-6">
                5.2 Deleting your information.
              </h3>

              <p className="text-[15px] leading-[1.7] tracking-tight text-gray-500 mb-6">
                If you follow the instructions <span className="text-[#1d9bf0] underline">here</span>, your account will be deactivated and your data will be queued for deletion. When deactivated, your X account, including your display name, username, and public profile, will no longer be viewable on X.com, X for iOS, and X for Android. For up to 30 days after deactivation it is still possible to restore your X account if it was accidentally or wrongfully deactivated.
              </p>
            </section>


            {/* 5.3 Objecting to, restricting, or withdrawing your consent. */}
            <section>
              <h3 className="text-[15px] font-bold text-[#536471] mb-6">
                5.3 Objecting to, restricting, or withdrawing your consent.
              </h3>

              <p className="text-[15px] leading-[1.7] tracking-tight text-gray-500 mb-6">
                You can manage your privacy settings and other account features <span className="text-[#1d9bf0] underline">here</span>. If you change your settings it may take some time for your choices to be fully reflected throughout our systems. You may also notice changes in your X experience or limitations in your ability to access certain features depending on the settings you’ve adjusted. You may also manage additional settings when interacting with certain content and features on different parts of the platform, such as whether a <span className="text-[#1d9bf0] underline">Space</span> is recorded, or whether <span className="text-[#1d9bf0] underline">videos you upload</span> are downloadable by others.
              </p>
            </section>


            {/* 5.4 Authorized agent requests. */}
            <section>
              <h3 className="text-[15px] font-bold text-[#536471] mb-6">
                5.4 Authorized agent requests.
              </h3>

              <p className="text-[15px] leading-[1.7] tracking-tight text-gray-500 mb-6">
                To submit a request related to access, modification, or deletion of your information, or someone else’s information if you are their authorized agent, you may also contact us as specified in the How To Contact X section of our Privacy Policy below. We may require you to provide additional information for verification.
              </p>
            </section>
          </section>

          <div className="mt-6 mb-15 h-px w-full bg-gray-400" />
     

          {/* ===== 6. Your Rights And Ours ===== */}
          
          <section>
            <h2 className="text-[35px] leading-[1.2] font-bold  text-[#0f1419] mb-6">
              6. Your Rights And Ours 
            </h2>

            <p className="text-[15px] leading-[1.7] tracking-tight text-gray-500 mb-6">
              We provide X to people all over the world and provide many of the same privacy tools and controls to all of our users regardless of where they live. However, your experience may be slightly different than users in other countries to ensure X respects local requirements.
            </p>


            {/* 6.1 We have specific legal bases to use your information. */}
            <section>
              <h3 className="text-[15px] font-bold text-[#536471] mb-6">
                6.1 We have specific legal bases to use your information.
              </h3>

              <p className="text-[15px] leading-[1.7] tracking-tight text-gray-500 mb-6">
                X has carefully considered the legal reasons it is permitted to collect, use, share and otherwise process your information. If you want to dig in to learn more and better understand the nuances, we’d encourage you to check out <span className="text-[#1d9bf0] underline">this additional information about data processing</span>. And no, we don’t sell your personal information. 
              </p>
            </section>
            

            {/* 6.2 We move your data to make X work for you. */}
            <section>
              <h3 className="text-[15px] font-bold text-[#536471] mb-6">
                6.2 We move your data to make X work for you.
              </h3>

              <p className="text-[15px] leading-[1.7] tracking-tight text-gray-500 mb-6">
                Just as you use X to seamlessly participate in global conversations with people in countries all over the world, X must move information across borders and to different countries around the world to support the safe and reliable service you depend on. For example, if you live in Europe and are having a conversation with someone in the United States, information has to move between those countries to provide that experience – it’s what you expect from us.
              </p>

              <p className="text-[15px] leading-[1.7] tracking-tight text-gray-500 mb-6">
                We also use data centers and cloud providers, and engage <span className="text-[#1d9bf0] underline">our affiliates</span>  and third-party partners and <span className="text-[#1d9bf0] underline">service providers</span> located in many parts of the world to help us provide our services. Before we move data between countries we look at the risks that may be presented to the data and rely on <span className="text-[#1d9bf0] underline">standard contractual clauses</span> (SCCs), where applicable, to ensure your data rights are protected. To request a copy of the SCCs, please contact us <span className="text-[#1d9bf0] underline">here</span>. If data will be shared with a third party, we require them to maintain the same protections over your data that we provide directly.
              </p>

              <p className="text-[15px] leading-[1.7] tracking-tight text-gray-500 mb-6">
                X is a <span className="text-[#1d9bf0] underline">participant</span> in the EU-US Data Privacy Framework (DPF), the Swiss-US DPF and the UK Extension to the EU-US DPF. X complies with the DPF Principles for all its processing of personal data received from the European Union, Switzerland and the UK, in reliance on the EU-US DPF, Swiss-US DPF and UK Extension to the EU-US DPF, respectively. If you have an inquiry or complaint related to our participation in the DPF, please contact us here. As part of our participation in the DPF, if you have a dispute with us about our adherence to the DPF Principles, we will seek to resolve it through our internal complaint resolution process, alternatively through the US-based independent dispute resolution body <span className="text-[#1d9bf0] underline">JAMS</span>, and under certain conditions, through the DPF Arbitration Process following the procedures and subject to the conditions described in <span className="text-[#1d9bf0] underline">Annex 1</span> to the DPF Principles. DPF participants are subject to the investigatory and enforcement powers of the US Federal Trade Commission and other authorized statutory bodies. Under certain circumstances, participants may be liable for the transfer of personal data from the EU, Switzerland and the UK to third parties outside the EU, Switzerland and the UK. Learn more about the EU-US DPF, the Swiss-US DPF and the UK Extension to the EU-US DPF <span className="text-[#1d9bf0] underline">here</span>.
              </p>
            </section>
          </section>

          
          <div className="mt-6 mb-15 h-px w-full bg-gray-400" />
     

          {/* ===== 7. X's Audience ===== */}

          <section>
            <h2 className="text-[35px] leading-[1.2] font-bold  text-[#0f1419] mb-6">
              7. X's Audience
            </h2>

            <p className="text-[15px] leading-[1.7] tracking-tight text-gray-500 mb-6">
              Our services are not directed to children, and you may not use our services if you are under the age of 13. You must also be old enough to consent to the processing of your personal data in your country (in some countries we may allow your <span className="text-[#1d9bf0] underline">parent or guardian to do so on your behalf</span>parent or guardian to do so on your behalf). We do not knowingly collect personal information from children under 13. If you become aware that your child has provided us with personal information without your consent, please contact us <span className="text-[#1d9bf0] underline">here</span>. If we become aware that a child under 13 has provided us with personal information, we take steps to remove such information and terminate the child’s account. You can find additional resources for parents and teens <span className="text-[#1d9bf0] underline">here</span>.
            </p>
          </section>


          <div className="mt-6 mb-15 h-px w-full bg-gray-400" />
     

          {/* ===== 8. Changes To This Privacy Policy ===== */}
          
          <section>
            <h2 className="text-[35px] leading-[1.2] font-bold  text-[#0f1419] mb-6">
              8. Changes To This Privacy Policy
            </h2>

            <p className="text-[15px] leading-[1.7] tracking-tight text-gray-500 mb-6">
              The most current version of this Privacy Policy governs our processing of your personal data and we may revise this Privacy Policy from time to time as needed.
            </p>

            <p className="text-[15px] leading-[1.7] tracking-tight text-gray-500 mb-6">
              If we do revise this Privacy Policy and make changes that are determined by us to be material, we will provide you notice and an opportunity to review the revised Privacy Policy before you continue to use X.
            </p>
          </section>


          <div className="mt-6 mb-15 h-px w-full bg-gray-400" />
     

          {/* ===== 9. General ===== */}

          <section>
            <h2 className="text-[35px] leading-[1.2] font-bold  text-[#0f1419] mb-6">
              9. General
            </h2>

            <p className="text-[15px] leading-[1.7] tracking-tight text-gray-500 mb-6">
              The X Privacy Policy is written in English but is made available in multiple languages through translations. X strives to make the translations as accurate as possible to the original English version. However, in case of any discrepancies or inconsistencies, the English language version of the X Privacy Policy shall take precedence. You acknowledge that English shall be the language of reference for interpreting and constructing the terms of the X Privacy Policy. 
            </p>
          </section>


          <div className="mt-6 mb-15 h-px w-full bg-gray-400" />
     

          {/* ===== 10. How To Contact X ===== */}

          <section>
            {/* ===== Title ===== */}
            <h2 className="text-[35px] leading-[1.2] font-bold text-[#0f1419] mb-6">
              10. How To Contact X
            </h2>

            {/* ===== Intro paragraph ===== */}
            <p className="text-[15px] leading-[1.7] tracking-tight text-gray-500 mb-12">
              We want to hear from you if you have thoughts or questions about this Privacy
              Policy. You can contact us via our{" "}
              <span className="text-[#1d9bf0] underline">Privacy Policy Inquiries</span>{" "}
              page or by writing to us at the appropriate address below. Information about
              our handling of California Consumer Privacy Act (CCPA) requests is available{" "}
              <span className="text-[#1d9bf0] underline">here</span>. Information about our
              handling of “Consumer Health Data” and associated requests as defined under
              Washington State’s My Health My Data Act and other similar state laws is
              available <span className="text-[#1d9bf0] underline">here</span>. For Oregon
              residents, more information about our handling of personal information
              described in this Privacy Policy and associated requests and appeals under
              Oregon’s Consumer Privacy Act (OCPA) is available{" "}
              <span className="text-[#1d9bf0] underline">here</span>.
            </p>

            {/* ===== Address blocks (2 columns) ===== */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-16 mb-16">
              {/* LEFT */}
              <div className="text-[15px] leading-[1.7] text-gray-500 space-y-6">
                <p>
                  If you live in the United States or any other country outside of the
                  European Union, EFTA States, or the United Kingdom, the data controller
                  responsible for your personal data is X Corp., with an address of:
                </p>

                <div className="font-bold text-gray-600">
                  <p>X Corp.</p>
                  <p>Attn: Privacy Policy Inquiry</p>
                  <p>865 FM 1209, Building 2</p>
                  <p>Bastrop, TX 78602</p>
                </div>
              </div>

              {/* RIGHT */}
              <div className="text-[15px] leading-[1.7] text-gray-500 space-y-6">
                <p>
                  If you live in the European Union, EFTA States, or the United Kingdom, the
                  data controller responsible for your personal data is X Internet
                  Unlimited Company, with an address of:
                </p>

                <div className="font-bold text-gray-600">
                  <p>X Internet Unlimited Company</p>
                  <p>Attn: Data Protection Officer</p>
                  <p>One Cumberland Place, Fenian Street</p>
                  <p>Dublin 2, D02 AX07 IRELAND</p>
                </div>

                <p>
                  If you live in Switzerland, you can also contact our appointed
                  representative at the following address:
                </p>

                <div className="font-bold text-gray-600">
                  <p>X Switzerland GmbH</p>
                  <p>Attn: Data Protection Officer</p>
                  <p>c/o Wasag Treuhand AG</p>
                  <p>Normannenstrasse 8</p>
                  <p>Postfach 783</p>
                  <p>3018 Bern, SWITZERLAND</p>
                </div>
              </div>
            </div>

            {/* ===== Final paragraph ===== */}
            <p className="text-[15px] leading-[1.7] text-gray-500 mb-10">
              If you wish to raise a concern about our{" "}
              <span className="text-[#1d9bf0] underline">
                data processing practices
              </span>
              , you have the right to do so with your local supervisory authority or X
              Internet Unlimited Company’s lead supervisory authority, the Irish Data
              Protection Commission, using the{" "}
              <span className="text-[#1d9bf0] underline">contact details</span> listed on
              their website.
            </p>

            {/* ===== Effective date ===== */}
            <p className="text-[15px] font-medium text-gray-500 mb-17">
              <span className="font-bold">Effective:</span> January 15, 2026
            </p>

            {/* ===== Button ===== */}
            <button className="px-5 py-1 rounded-full border border-black/70 text-[14px] font-bold text-black hover:bg-black/5 cursor-pointer">
              View previous policies
            </button>
          </section>

          </article>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-8 md:px-20 mt-50 mb-35">
          <h2 className="text-7xl font-bold mb-10">
            Take control of
            <br />
            your privacy
          </h2>

          <button className="bg-black text-white px-7 py-3  rounded-full text-md font-bold hover:bg-black/90 cursor-pointer">
            Adjust your settings
          </button>
        </div>
      </section>

      {/* FOOTER GOES HERE */}

      <BaseFooter />
    </main>
  );
};

export default PrivacyFooter;
