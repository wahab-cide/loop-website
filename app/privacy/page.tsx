import type { Metadata } from "next";
import { 
  LegalLayout, 
  Section, 
  Subsection, 
  Paragraph, 
  BulletList, 
  BulletItem,
  Strong
} from "@/components/legal-layout";

export const metadata: Metadata = {
  title: "Privacy Policy | Loop - Student Rideshare App",
  description: "Learn how Loop Platform, Inc. collects, uses, and protects your personal information when you use our rideshare platform.",
};

export default function PrivacyPolicy() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="July 2025">
      <Section title="1. OVERVIEW" id="overview">
        <Subsection title="About the Company">
          <Paragraph>
            Loop Platform, Inc., a Delaware corporation, and its affiliates ("Loop," "we," "us," or "our") operate the website located at looprides.dev, the "Loop" mobile application available from the Apple App Store, Android Play Store, and other related websites, mobile applications, products and services (collectively, the "Platform").
          </Paragraph>
          <Paragraph>
            This Privacy Policy explains how we collect, use, store, retain, and disclose your information when you use our Platform and services. By accessing, viewing, or using the Platform, you agree to be bound by this Privacy Policy. This Privacy Policy is incorporated into and made a part of our Terms of Service by reference.
          </Paragraph>
        </Subsection>
      </Section>

      <Section title="2. INFORMATION WE COLLECT" id="information-collected">
        <Subsection title="Personal Information">
          <Paragraph>
            We collect personal information that you provide directly to us, including:
          </Paragraph>
          <BulletList>
            <BulletItem>Name, email address, phone number, and other contact information</BulletItem>
            <BulletItem>Driver's license information, vehicle registration, and insurance details (for Drivers)</BulletItem>
            <BulletItem>Payment information and billing details</BulletItem>
            <BulletItem>Profile information, including photos and preferences</BulletItem>
            <BulletItem>Communications with us and other users through the Platform</BulletItem>
            <BulletItem>Location data when you use our services</BulletItem>
            <BulletItem>Device information and usage data</BulletItem>
          </BulletList>
        </Subsection>

        <Subsection title="Information Collected Automatically">
          <Paragraph>
            We automatically collect certain information when you use our Platform, including:
          </Paragraph>
          <BulletList>
            <BulletItem>Device information (device type, operating system, unique device identifiers)</BulletItem>
            <BulletItem>Log information (IP address, browser type, access times, pages viewed)</BulletItem>
            <BulletItem>Location information (with your consent)</BulletItem>
            <BulletItem>Usage data (features used, interactions with the Platform)</BulletItem>
            <BulletItem>Cookies and similar technologies</BulletItem>
          </BulletList>
        </Subsection>

        <Subsection title="Information from Third Parties">
          <Paragraph>
            We may receive information about you from third parties, including:
          </Paragraph>
          <BulletList>
            <BulletItem>Background check providers (for Drivers)</BulletItem>
            <BulletItem>Payment processors</BulletItem>
            <BulletItem>Social media platforms (if you connect your account)</BulletItem>
            <BulletItem>Other users of the Platform</BulletItem>
          </BulletList>
        </Subsection>
      </Section>

      <Section title="3. HOW WE USE YOUR INFORMATION" id="how-we-use">
        <Paragraph>
          We use the information we collect to:
        </Paragraph>
        <BulletList>
          <BulletItem>Provide, maintain, and improve our Platform and services</BulletItem>
          <BulletItem>Process transactions and payments</BulletItem>
          <BulletItem>Match Riders with Drivers</BulletItem>
          <BulletItem>Verify Driver credentials and conduct background checks</BulletItem>
          <BulletItem>Communicate with you about your account and our services</BulletItem>
          <BulletItem>Send you updates, security alerts, and support messages</BulletItem>
          <BulletItem>Respond to your comments, questions, and requests</BulletItem>
          <BulletItem>Monitor and analyze usage patterns and trends</BulletItem>
          <BulletItem>Detect, prevent, and address technical issues and security threats</BulletItem>
          <BulletItem>Comply with legal obligations</BulletItem>
          <BulletItem>Protect the rights, property, and safety of our users and the public</BulletItem>
        </BulletList>
      </Section>

      <Section title="4. HOW WE SHARE YOUR INFORMATION" id="how-we-share">
        <Paragraph>
          We may share your information in the following circumstances:
        </Paragraph>

        <Subsection title="With Other Users">
          <BulletList>
            <BulletItem>Riders and Drivers may see basic profile information to facilitate rides</BulletItem>
            <BulletItem>Location data may be shared between matched Riders and Drivers</BulletItem>
            <BulletItem>Ratings and reviews may be visible to other users</BulletItem>
          </BulletList>
        </Subsection>

        <Subsection title="With Service Providers">
          <BulletList>
            <BulletItem>Payment processors to process transactions</BulletItem>
            <BulletItem>Background check providers for Driver verification</BulletItem>
            <BulletItem>Cloud storage and hosting providers</BulletItem>
            <BulletItem>Analytics and monitoring services</BulletItem>
            <BulletItem>Customer support services</BulletItem>
          </BulletList>
        </Subsection>

        <Subsection title="With Legal Requirements">
          <BulletList>
            <BulletItem>To comply with applicable laws and regulations</BulletItem>
            <BulletItem>To respond to legal process and government requests</BulletItem>
            <BulletItem>To protect our rights and property</BulletItem>
            <BulletItem>To investigate potential violations of our policies</BulletItem>
          </BulletList>
        </Subsection>

        <Subsection title="In Business Transfers">
          <BulletList>
            <BulletItem>In connection with a merger, acquisition, or sale of assets</BulletItem>
            <BulletItem>As part of a bankruptcy or similar proceeding</BulletItem>
          </BulletList>
        </Subsection>

        <Subsection title="With Your Consent">
          <BulletList>
            <BulletItem>In other ways described to you at the point of collection</BulletItem>
            <BulletItem>With your explicit permission</BulletItem>
          </BulletList>
        </Subsection>
      </Section>

      <Section title="5. LOCATION DATA" id="location-data">
        <Paragraph>
          We collect and use location data to:
        </Paragraph>
        <BulletList>
          <BulletItem>Match Riders with nearby Drivers</BulletItem>
          <BulletItem>Provide real-time tracking during rides</BulletItem>
          <BulletItem>Improve our services and user experience</BulletItem>
          <BulletItem>Ensure safety and security</BulletItem>
        </BulletList>
        <Paragraph>
          You can control location permissions through your device settings. However, some features may not work properly without location access.
        </Paragraph>
      </Section>

      <Section title="6. DATA RETENTION" id="data-retention">
        <Paragraph>
          We retain your information for as long as necessary to:
        </Paragraph>
        <BulletList>
          <BulletItem>Provide our services to you</BulletItem>
          <BulletItem>Comply with legal obligations</BulletItem>
          <BulletItem>Resolve disputes</BulletItem>
          <BulletItem>Enforce our agreements</BulletItem>
        </BulletList>
        <Paragraph>
          We may retain certain information for longer periods if required by law or for legitimate business purposes.
        </Paragraph>
      </Section>

      <Section title="7. DATA SECURITY" id="data-security">
        <Paragraph>
          We implement appropriate technical and organizational measures to protect your information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
        </Paragraph>
      </Section>

      <Section title="8. YOUR RIGHTS AND CHOICES" id="rights-choices">
        <Subsection title="Access and Update">
          <Paragraph>
            You can access and update your account information through the Platform settings.
          </Paragraph>
        </Subsection>

        <Subsection title="Deletion">
          <Paragraph>
            You may request deletion of your account and personal information, subject to certain legal and business requirements.
          </Paragraph>
        </Subsection>

        <Subsection title="Opt-Out">
          <Paragraph>
            You can opt out of certain communications by following the unsubscribe instructions in our emails or contacting us directly.
          </Paragraph>
        </Subsection>

        <Subsection title="Cookies">
          <Paragraph>
            You can control cookie settings through your browser preferences.
          </Paragraph>
        </Subsection>
      </Section>

      <Section title="9. CHILDREN'S PRIVACY" id="childrens-privacy">
        <Paragraph>
          Our Platform is not intended for children under 18 years of age. We do not knowingly collect personal information from children under 18. If you believe we have collected information from a child under 18, please contact us immediately.
        </Paragraph>
      </Section>

      <Section title="10. INTERNATIONAL DATA TRANSFERS" id="international-transfers">
        <Paragraph>
          Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.
        </Paragraph>
      </Section>

      <Section title="11. CALIFORNIA PRIVACY RIGHTS" id="california-rights">
        <Paragraph>
          If you are a California resident, you have certain rights under the California Consumer Privacy Act (CCPA), including:
        </Paragraph>
        <BulletList>
          <BulletItem>The right to know what personal information we collect and how we use it</BulletItem>
          <BulletItem>The right to delete your personal information</BulletItem>
          <BulletItem>The right to opt out of the sale of personal information</BulletItem>
          <BulletItem>The right to non-discrimination for exercising your privacy rights</BulletItem>
        </BulletList>
        <Paragraph>
          To exercise these rights, please contact us using the information provided below.
        </Paragraph>
      </Section>

      <Section title="12. CHANGES TO THIS PRIVACY POLICY" id="changes">
        <Paragraph>
          We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on our Platform and updating the "Last Updated" date. Your continued use of the Platform after such changes constitutes acceptance of the updated Privacy Policy.
        </Paragraph>
      </Section>

      <Section title="13. CONTACT US" id="contact">
        <Paragraph>
          If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
        </Paragraph>
        <div className="bg-neutral-900 rounded-lg p-6 mt-4">
          <p className="text-neutral-300 mb-2">
            <Strong>Loop Platform, Inc.</Strong>
          </p>
          <p className="text-neutral-300 mb-2">
            Email: <a href="mailto:developer.loop.acc@icloud.com" className="text-blue-400 hover:text-blue-300">developer.loop.acc@icloud.com</a>
          </p>
          <p className="text-neutral-300">
            Website: <a href="https://looprides.dev" className="text-blue-400 hover:text-blue-300">looprides.dev</a>
          </p>
        </div>
        <div className="bg-neutral-900 rounded-lg p-6 mt-4">
          <p className="text-white font-medium mb-2">For California residents:</p>
          <p className="text-neutral-300">
            Email: <a href="mailto:developer.loop.acc@icloud.com" className="text-blue-400 hover:text-blue-300">developer.loop.acc@icloud.com</a>
          </p>
        </div>
      </Section>
    </LegalLayout>
  );
}