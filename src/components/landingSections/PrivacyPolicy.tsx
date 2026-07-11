import { ShieldCheck } from "lucide-react";
import LegalPageLayout from "../_shared/LegalPageLayout";

const TOC = [
  { id: "information-we-collect", label: "The Information We Collect" },
  { id: "how-we-use-information", label: "How We Use the Information" },
  { id: "recording-calls", label: "Recording Telephone Calls" },
  { id: "sharing-your-data", label: "Who We May Share Your Data With" },
  { id: "credit-rating-bureaus", label: "Credit Rating Bureaus" },
  { id: "direct-marketing", label: "Direct Marketing & Preferences" },
  { id: "how-we-protect-information", label: "How We Protect Your Information" },
  { id: "data-retention", label: "How Long We Keep Your Information" },
  { id: "third-party-links", label: "Third Party Websites" },
  { id: "automated-decision-making", label: "Automated Decision Making" },
  { id: "your-rights", label: "Your Rights" },
  { id: "contact-us", label: "Contact Us" },
];

const sectionClasses = "border-t border-gray-100 pt-8 mt-8 first:mt-0 first:border-0 first:pt-0";
const h2Classes = "text-2xl font-semibold text-gray-900";
const h3Classes = "mt-8 text-lg font-semibold text-brand-purple";
const pClasses = "mt-3 leading-relaxed text-gray-700";
const ulClasses = "mt-3 list-disc space-y-1.5 pl-6 leading-relaxed text-gray-700 marker:text-brand-purple-light";

export default function PrivacyPolicy() {
  return (
    <LegalPageLayout
      icon={ShieldCheck}
      title="Privacy Policy"
      toc={TOC}
      intro="Loadstone Financials Limited (also known as Loadstone Financials) will be the controller for the data that you provide us or we collect in relation to the provision of our lending services to you. We respect your privacy and protecting your information is paramount. We want you to be informed and empowered with respect to your privacy when you use our services. Please read this Privacy Policy carefully before using our website or apps or registering to use our services. Together with our Terms and Cookies Policy, this Privacy Policy sets out our views and practices regarding your personal data and how we collect, process and treat it. This notice explains how we handle your personal data and our attitude towards data protection."
    >
      <section id="information-we-collect" className={sectionClasses}>
        <h2 className={h2Classes}>The Information We Collect</h2>
        <p className={pClasses}>We collect and process information which:</p>
        <ul className={ulClasses}>
          <li>You give to us when you register with us, such as your name and contact details</li>
          <li>We obtain from Credit Reference Agencies on your behalf</li>
          <li>We collect about you based on your use of our website</li>
          <li>We receive from other sources, such as third parties who give us information about you</li>
        </ul>
        <p className={pClasses}>We may collect and process the following data about you.</p>

        <h3 className={h3Classes}>Information You Give Us</h3>
        <p className={pClasses}>
          You may give us information about you when you use our services or by communicating with
          us. This includes information you provide when you participate in discussion boards,
          answer specific questions on our website, provide us with feedback, participate in
          surveys, and when you report a problem. The information you give us may include:
        </p>
        <ul className={`${ulClasses} grid grid-cols-2 gap-x-4 sm:grid-cols-3`}>
          <li>Title</li>
          <li>Name</li>
          <li>Income</li>
          <li>Email Address</li>
          <li>Date of Birth</li>
          <li>Phone Number</li>
          <li>Monthly Expenditure</li>
          <li>Residential Details</li>
          <li>Employment Details</li>
          <li>Address history</li>
          <li>Bank</li>
          <li>Property value</li>
          <li>Driving license details</li>
          <li>Lifestyle Information</li>
        </ul>

        <h3 className={h3Classes}>Information We Collect from Credit Reference Agencies on your behalf</h3>
        <p className={pClasses}>
          If you register to use our services, we will obtain your credit score and credit report
          from one or more Credit Rating Bureau on your behalf.
        </p>

        <h3 className={h3Classes}>Information We Collect from Our Partners on Your behalf</h3>
        <p className={pClasses}>
          Each time you visit our website we may automatically collect the following information:
        </p>
        <ul className={ulClasses}>
          <li>
            Technical Information: including the Internet protocol (IP) address, your login
            information, browser type and version, time zone setting, operating system and
            platform;
          </li>
          <li>
            Information about your visit: including the full Uniform Resource Locators (URL)
            clickstream to, through and from our website (including date and time); products you
            viewed or searched for; page response times, download errors, length of visits to
            certain pages, page interaction information (such as scrolling, clicks, and
            mouse-overs), and methods used to browse away from the page and any phone number used
            to call our customer service number.
          </li>
        </ul>

        <h3 className={h3Classes}>Information We receive from Other Sources</h3>
        <p className={pClasses}>
          We may receive information about you if you use our website. We are also working closely
          with third parties (including, for example, business partners, service providers,
          analytics providers, search information providers, social media) and may receive
          information from them, such as your credit report information, whether or not you have
          taken out a product with them, what other products you may have used, and other such
          details.
        </p>
      </section>

      <section id="how-we-use-information" className={sectionClasses}>
        <h2 className={h2Classes}>How We use the Information</h2>
        <p className={pClasses}>
          We use information we hold about you to provide our services to you, improve those
          services, administer your account, to fulfil our legal obligation, respond to your
          enquiries, customer support, manage our relationship with you, and communicate with you
          and to use information on an anonymous basis for research and analytical purposes.
        </p>

        <h3 className={h3Classes}>
          Information you give to Us or We collect from Credit Reporting Bureaus, Partners or Other
          Third Parties on Your behalf as part of Our Services
        </h3>
        <ul className={ulClasses}>
          <li>
            Administer your account and relationship with us and to, communicate with you by
            telephone, mail, email, text (SMS) message, push notification or other electronic
            means;
          </li>
          <li>Verify your identity as part of our identity authentication process;</li>
          <li>Provide you with information, products and services;</li>
          <li>
            Where you have provided your consent for us to market to you, provide you with
            information about other products and services we feel may interest you or be best for
            you;
          </li>
          <li>Notify you about changes to our services;</li>
          <li>
            Ensure that content from our website is presented in the most effective manner for you
            and your device;
          </li>
          <li>
            Aggregate it on an anonymous basis with other data for data analytical and reporting
            purposes; and
          </li>
          <li>
            Undertake analysis and profiling of your credit information in order to identify and
            inform you of credit products that we consider are likely to interest you or be suited
            to your credit circumstances or to enhance our services.
          </li>
        </ul>

        <h3 className={h3Classes}>Information We Collect about You based on Your use of Our Website</h3>
        <ul className={ulClasses}>
          <li>
            To administer our website and for internal operations, including troubleshooting, data
            analysis, testing, research, statistical and survey purposes;
          </li>
          <li>
            To improve the services we offer you such as understanding the effectiveness of
            advertising we serve to you and others, and to deliver relevant advertising to you;
          </li>
          <li>As part of our efforts to keep our website safe and secure and to prevent fraud;</li>
          <li>To make recommendations about products or services that may be of interest.</li>
        </ul>

        <h3 className={h3Classes}>Information We receive from Other Sources</h3>
        <p className={pClasses}>
          We may combine this information with information you give to us and use this information
          and the combined information for the purposes set out above.
        </p>
      </section>

      <section id="recording-calls" className={sectionClasses}>
        <h2 className={h2Classes}>Recording Telephone Calls and Other Communications</h2>
        <p className={pClasses}>
          We will use telephone recordings or transcripts of communications to check your
          instructions to us, analyse, assess and improve our services, for training and quality
          purposes and for the purposes of investigating any complaint you may make, or as evidence
          in any dispute between you and us.
        </p>
      </section>

      <section id="sharing-your-data" className={sectionClasses}>
        <h2 className={h2Classes}>Who We may Share Your Data with</h2>
        <p className={pClasses}>
          We may share your data with other third parties, such as our service providers, Credit
          Rating Bureaus, and Anti-Graft Agencies and Partners. We may need to disclose your data to
          others to ensure the smooth provision to you of the products, services and information
          you request. Your data may be disclosed to the other entities as described below. These
          third parties act on our instructions and are processors of your information. The
          personal information we have collected from you will be shared with Background Check
          agencies who will use it to verify your identity. We will share your data due to our
          legal obligation to ensure we meet know your customer (KYC) and anti-money laundering
          obligations under extant laws.
        </p>

        <h3 className={h3Classes}>Sub-Processors</h3>
        <p className={pClasses}>We may share your information with the following sub-processors:</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {["Google", "Microsoft", "Systemspecs", "CreditClan", "Paystack", "Flutterwave", "Nigerian Interbank Settlement System (NIBSS)"].map(
            (name) => (
              <span key={name} className="rounded-full bg-[#F5EFF7] px-3 py-1 text-sm text-gray-700">
                {name}
              </span>
            )
          )}
        </div>

        <h3 className={h3Classes}>Selected Third Parties</h3>
        <p className={pClasses}>We may also share your information with selected third parties including:</p>
        <ul className={ulClasses}>
          <li>
            Credit Rating Bureaus, to obtain your credit score and credit report on your behalf and
            to provide our services to you;
          </li>
          <li>Background Check agencies, to verify identity;</li>
          <li>Anti-graft agencies or other regulators to comply with our legal obligations;</li>
          <li>
            Product providers, such as our business partners who offer you credit cards, loans, car
            finance, mortgages, insurance, pensions, investments and other related products, to:
            <ul className="mt-2 list-[circle] space-y-1 pl-6 marker:text-brand-purple-light">
              <li>Assess if you are an existing customer and for Background Check purpose;</li>
              <li>
                Conduct analysis to provide you with better products and services in the future,
                and for segmentation purposes;
              </li>
              <li>Pre-fill an application form with the product provider;</li>
              <li>assess your probability of being accepted for a product</li>
            </ul>
          </li>
          <li>
            Analytics and search engine providers that assist us in the improvement and
            optimisation of our service
          </li>
          <li>
            If we sell or buy any business or assets, in which case we may disclose your personal
            data to the prospective seller or buyer of such business or assets (or the buyer or
            seller&rsquo;s advisers)
          </li>
          <li>
            If we or part or all of our assets are acquired by a third party, in which case
            personal data held by us about our customers will be one of the transferred assets
          </li>
          <li>
            If we are under a duty to disclose or share your personal data in order to comply with
            any legal obligation, or in order to enforce or apply our Terms and other agreements;
            or to protect the rights, property, or safety of Loadstone Financials, our customers,
            or others. This includes exchanging information with other companies and organisations
            for the purposes of fraud protection and credit risk reduction.
          </li>
        </ul>
        <p className={pClasses}>
          The Product provider does not have permission to use this data for any other purpose
          including marketing.
        </p>
      </section>

      <section id="credit-rating-bureaus" className={sectionClasses}>
        <h2 className={h2Classes}>Credit Rating Bureaus</h2>
        <p className={pClasses}>
          We make we have appropriate legal bases on which to collect, use and share data about
          you. If you have any questions about the lawful bases upon which we collect and use your
          personal data, you can contact our Data Protection Officer. Our lawful bases may include
          consent (where you have given consent), contract (where processing is necessary for the
          performance of a contract with you such as delivering our core services to you) and,
          legal obligation, and our own legitimate interests.
        </p>

        <h3 className={h3Classes}>Consent</h3>
        <p className={pClasses}>
          We will always seek your consent to process certain types of information where we are
          legally required to do so. You have the right to withdraw or decline your consent at any
          time.
        </p>

        <h3 className={h3Classes}>Performance of Contract</h3>
        <p className={pClasses}>
          Processing your data is necessary for a contract you have with us, or because we have
          asked you to take specific steps before entering into that contract.
        </p>

        <h3 className={h3Classes}>Legitimate Interests</h3>
        <p className={pClasses}>
          Processing your data is necessary for our legitimate interests or the legitimate
          interests of a third party, provided those interests are not outweighed by your rights
          and interests. These legitimate interests are:
        </p>
        <ul className={ulClasses}>
          <li>Delivering, developing and improving our website;</li>
          <li>Enabling us to enhance, customise or modify our services and communication;</li>
          <li>Determining whether marketing campaigns are effective;</li>
          <li>Enhancing data security.</li>
        </ul>
        <p className={pClasses}>
          In each case, these legitimate interests are only valid if they are not outweighed by
          your rights and interests. Where we rely on legitimate interests, you have the right to
          object at any time. We may also process data if there is a legal obligation on us to
          process such data under existing laws and regulations in Nigeria.
        </p>
      </section>

      <section id="direct-marketing" className={sectionClasses}>
        <h2 className={h2Classes}>Direct Marketing and how You can Change Your Preference</h2>
        <p className={pClasses}>
          We offer you the opportunity to receive marketing information from us. You can opt out
          easily of receiving marketing from us at any time. We will normally send direct marketing
          by email if we have your email address, but may choose to contact you via other methods,
          such as push notifications to your devices. You may receive the following types of
          communications from us:
        </p>
        <ul className={ulClasses}>
          <li>
            Product recommendations - we&rsquo;ll get in touch with personalized, timely product
            recommendations that can help you improve your financial situation. We will only ever
            send these if you explicitly consent to receiving them and you can unsubscribe whenever
            you like.
          </li>
          <li>
            Content communications - we&rsquo;ll send you content such as tips, research, features
            and news, coaching programs on how to keep on top of your money and other related
            content. You can unsubscribe from these at any time and we will never spam your inbox.
          </li>
          <li>
            Core communications - we will send you your credit report every month, alerts whenever
            there is a change to your credit report, security alerts pertaining to your Loadstone
            Financials account, significant changes which may impact our service and other such
            related content. These communications are an intrinsic part of owning a Loadstone
            Financials account and cannot be opted-out of.
          </li>
        </ul>
        <p className={pClasses}>
          If you would like us to stop sending direct marketing to you, we offer simple ways to do
          this. Whenever you receive direct marketing you will be given an option to unsubscribe.
          You can also tell us that you do not wish to receive any more marketing communications at
          any time by writing, with your full name, address and other contact details (to enable us
          to find your records), to: Data Protection Officer Loadstone Financials.
        </p>
      </section>

      <section id="how-we-protect-information" className={sectionClasses}>
        <h2 className={h2Classes}>How We protect Your Information</h2>
        <p className={pClasses}>
          We take the security of your data very seriously and use strict procedures to protect it.
          Whenever we transfer personal data Nigeria, we ensure that appropriate safeguards are in
          place to protect the data. All information you provide to us is stored on our secure
          servers. We do our best to protect your personal data, but we cannot guarantee the
          security of your data transmitted to our website; any transmission is at your own risk.
          Once we have received your information, we will use strict procedures and security
          features to try to prevent unauthorised access, loss or damage. Where possible, we try to
          only process your information within Nigeria. If we or our service providers transfer
          personal data outside Nigeria, we always require that appropriate safeguards are in place
          to protect the information when it is processed.
        </p>
      </section>

      <section id="data-retention" className={sectionClasses}>
        <h2 className={h2Classes}>How long We keep Your Information for</h2>
        <p className={pClasses}>
          While your account remains active, we keep your information for no longer than is
          necessary depending on the purpose for which we are using it. We will keep your credit
          information for an initial period not less than six (6) years from the date such
          information is provide, and archived for a period of ten (10) years in compliance with
          the provision of Section 5 of the Credit Reporting Act, 2017. How long we keep your
          information will depend on the purpose for which we use it. While you are a customer of
          ours, we will only retain your information for as long as is necessary for those purposes.
          After termination of your account, we may continue to use anonymised data (which does not
          identify individual users) which is aggregated with anonymised data of other users. We
          use this aggregated anonymised data for data analysis and research purposes, for example
          to gain insights about our users. We may also keep your email address to ensure that you
          no longer receive any communications from us as well as your name, date of birth and
          latest address for Background Check purposes and for the exercise or defence of a legal
          claim.
        </p>
      </section>

      <section id="third-party-links" className={sectionClasses}>
        <h2 className={h2Classes}>Links to and from Third Party Websites</h2>
        <p className={pClasses}>
          Our website may, from time to time, contain links to and from the websites of our partner
          networks and affiliates. If you follow a link to any of these websites, please note that
          these websites have their own privacy notices and that we do not accept any responsibility
          or liability for these policies.
        </p>
      </section>

      <section id="automated-decision-making" className={sectionClasses}>
        <h2 className={h2Classes}>Automated Decision Making</h2>
        <p className={pClasses}>
          We use an automated decision making system to make automated decisions based on personal
          information we have about you. This helps us to make sure our decisions are quick and
          fair, based on what we know. We use automated processing for the following purposes:
        </p>
        <ul className={ulClasses}>
          <li>
            Identity verification - We use an automated decision making system to verify the
            details you provide against those held by third party providers. If you do not pass the
            check using the automated system, we cannot provide our services to you without being
            able to verify your identity.
          </li>
          <li>
            Tailored products and services - We may use your information to predict the probability
            that you may be accepted for a product, or to determine the best order or manner in
            which to display products to you.
          </li>
          <li>
            Tailored communications - We want to make sure we&rsquo;re only sending you emails that
            are relevant to you, and so we will use your personal information to determine which
            content you may be more interested in receiving. You&rsquo;ve the right not to be
            subject to a decision based solely on automated processing, including profiling. We
            understand that not everyone is comfortable with decisions being left entirely up to
            machines. If you have any questions about automated decision making, please contact us
            via info@loadstonefinancials.com.
          </li>
        </ul>
      </section>

      <section id="your-rights" className={sectionClasses}>
        <h2 className={h2Classes}>Your Rights</h2>
        <p className={pClasses}>
          You can exercise specific rights with regards to the data that we hold about you. You
          will be able to:
        </p>
        <ul className={ulClasses}>
          <li>
            Correct your data - you will usually be able to amend any information that we hold
            about you that is inaccurate or incomplete through the settings in your account;
          </li>
          <li>
            Request access to your data - you can ask for access to the personal data that we hold
            about you so that you can check that we are using your information in accordance with
            data protection law;
          </li>
          <li>
            Erase your data - you can ask us to fully or partially delete your personal data where
            there is no compelling reason for us to keep using it, although we may not be able to
            continue to provide our services. We may keep your email address to make sure the
            restriction is respected in future. We also have the right to continue using your
            information if such usage is necessary for compliance with our legal obligations;
          </li>
          <li>
            Download your data or send it to another controller - you can obtain a copy of the data
            you provided us in a machine-readable format. In addition, where certain conditions
            apply, you have the right to have such information transferred directly to a third
            party;
          </li>
          <li>
            Restrict the use of your data - You have the right to &lsquo;block&rsquo; or suppress
            further use of your information in certain circumstances (for example, where you think
            the information we are using about you is inaccurate, whilst we verify its accuracy).
            When usage is restricted, we can still store your information, but may not use it
            further;
          </li>
          <li>
            Right to withdraw consent - If you have given your consent for us to use your
            information, you have the right to withdraw your consent at any time. This can be done
            by contacting our Data Protection Officer;
          </li>
          <li>
            Right to lodge complaint with the Regulator: - If you are not satisfied with our
            response to any complaints you raise with us or you believe our processing of your
            information does not comply with the data protection law, we suggest you contact our
            Data Protection Officer. However, you can make a complaint to the Central Bank of
            Nigeria or the National Information Technology Development Agency.
          </li>
        </ul>
        <p className={pClasses}>
          For the exercise of any of your rights, you can also contact us at
          info@loadstonefinancials.com.
        </p>
      </section>

      <section id="contact-us" className={sectionClasses}>
        <h2 className={h2Classes}>Contact Us</h2>
        <p className={pClasses}>
          All access requests, questions, comments, complaints and other requests regarding the
          cookies policy should be sent to info@loadstonefinancials.com. We may request additional
          details from you regarding your complaints and keep records of your requests and
          resolution.
        </p>
      </section>
    </LegalPageLayout>
  );
}
