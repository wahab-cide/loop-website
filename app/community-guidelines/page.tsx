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
  title: "Community Guidelines | Loop - Student Rideshare App",
  description: "Learn about Loop's community standards and guidelines for creating a safe, respectful rideshare environment for all users.",
};

export default function CommunityGuidelines() {
  return (
    <LegalLayout title="Community Guidelines" lastUpdated="July 2025">
      <Section title="1. OVERVIEW" id="overview">
        <Subsection title="About Loop Community">
          <Paragraph>
            Loop Platform, Inc. ("Loop," "we," "us," or "our") is committed to building a safe, respectful, and vibrant community of Riders, Drivers, and other users who uphold our high standards of professionalism, tolerance, etiquette, diversity, and inclusiveness.
          </Paragraph>
          <Paragraph>
            These Community Guidelines outline the standards of behavior we expect from all users of our Platform. By using Loop, you agree to follow these guidelines and contribute to creating a positive environment for everyone.
          </Paragraph>
        </Subsection>
      </Section>

      <Section title="2. OUR MISSION" id="mission">
        <Paragraph>
          We believe in connecting people through safe, reliable transportation while fostering a community built on:
        </Paragraph>
        <BulletList>
          <BulletItem>Mutual respect and dignity</BulletItem>
          <BulletItem>Safety and security</BulletItem>
          <BulletItem>Professionalism and reliability</BulletItem>
          <BulletItem>Inclusivity and diversity</BulletItem>
          <BulletItem>Trust and transparency</BulletItem>
        </BulletList>
      </Section>

      <Section title="3. GENERAL BEHAVIOR STANDARDS" id="behavior-standards">
        <Subsection title="Respect and Courtesy">
          <BulletList>
            <BulletItem>Treat all users with respect, dignity, and courtesy</BulletItem>
            <BulletItem>Use appropriate language and avoid offensive or inflammatory remarks</BulletItem>
            <BulletItem>Be patient and understanding with other users</BulletItem>
            <BulletItem>Respect personal boundaries and privacy</BulletItem>
          </BulletList>
        </Subsection>

        <Subsection title="Professionalism">
          <BulletList>
            <BulletItem>Maintain professional conduct at all times</BulletItem>
            <BulletItem>Be punctual and reliable</BulletItem>
            <BulletItem>Communicate clearly and honestly</BulletItem>
            <BulletItem>Follow through on commitments</BulletItem>
          </BulletList>
        </Subsection>

        <Subsection title="Safety First">
          <BulletList>
            <BulletItem>Prioritize safety in all interactions</BulletItem>
            <BulletItem>Report any safety concerns immediately</BulletItem>
            <BulletItem>Follow traffic laws and safety regulations</BulletItem>
            <BulletItem>Never operate a vehicle under the influence of drugs or alcohol</BulletItem>
          </BulletList>
        </Subsection>
      </Section>

      <Section title="4. DRIVER GUIDELINES" id="driver-guidelines">
        <Subsection title="Vehicle Standards">
          <BulletList>
            <BulletItem>Maintain a clean, well-maintained vehicle</BulletItem>
            <BulletItem>Ensure all safety features are functional</BulletItem>
            <BulletItem>Keep the vehicle free of clutter and hazards</BulletItem>
            <BulletItem>Display required documentation prominently</BulletItem>
          </BulletList>
        </Subsection>

        <Subsection title="Professional Conduct">
          <BulletList>
            <BulletItem>Dress appropriately and maintain good hygiene</BulletItem>
            <BulletItem>Be courteous and professional with all passengers</BulletItem>
            <BulletItem>Respect passenger preferences and requests</BulletItem>
            <BulletItem>Provide a comfortable and safe environment</BulletItem>
          </BulletList>
        </Subsection>

        <Subsection title="Safety Responsibilities">
          <BulletList>
            <BulletItem>Drive safely and defensively</BulletItem>
            <BulletItem>Follow all traffic laws and regulations</BulletItem>
            <BulletItem>Maintain adequate insurance coverage</BulletItem>
            <BulletItem>Report any incidents or accidents promptly</BulletItem>
          </BulletList>
        </Subsection>
      </Section>

      <Section title="5. RIDER GUIDELINES" id="rider-guidelines">
        <Subsection title="Respect for Drivers">
          <BulletList>
            <BulletItem>Be respectful and courteous to your driver</BulletItem>
            <BulletItem>Provide accurate pickup and destination information</BulletItem>
            <BulletItem>Be ready at the designated pickup time</BulletItem>
            <BulletItem>Treat the vehicle with care and respect</BulletItem>
          </BulletList>
        </Subsection>

        <Subsection title="Communication">
          <BulletList>
            <BulletItem>Communicate clearly about your needs</BulletItem>
            <BulletItem>Provide feedback constructively</BulletItem>
            <BulletItem>Report any issues or concerns promptly</BulletItem>
            <BulletItem>Be honest in your ratings and reviews</BulletItem>
          </BulletList>
        </Subsection>

        <Subsection title="Safety Awareness">
          <BulletList>
            <BulletItem>Verify driver identity before entering the vehicle</BulletItem>
            <BulletItem>Trust your instincts - if something feels wrong, don't proceed</BulletItem>
            <BulletItem>Report any safety concerns immediately</BulletItem>
            <BulletItem>Follow safety instructions provided by the driver</BulletItem>
          </BulletList>
        </Subsection>
      </Section>

      <Section title="6. PROHIBITED BEHAVIORS" id="prohibited-behaviors">
        <Paragraph>
          The following behaviors are strictly prohibited and may result in immediate account suspension or termination:
        </Paragraph>

        <Subsection title="Discrimination and Harassment">
          <BulletList>
            <BulletItem>Discrimination based on race, ethnicity, religion, gender, sexual orientation, age, disability, or any other protected characteristic</BulletItem>
            <BulletItem>Harassment, bullying, or intimidation of any kind</BulletItem>
            <BulletItem>Sexual harassment or inappropriate behavior</BulletItem>
            <BulletItem>Hate speech or discriminatory language</BulletItem>
          </BulletList>
        </Subsection>

        <Subsection title="Safety Violations">
          <BulletList>
            <BulletItem>Operating a vehicle under the influence of drugs or alcohol</BulletItem>
            <BulletItem>Reckless or dangerous driving</BulletItem>
            <BulletItem>Refusing to wear seatbelts or follow safety protocols</BulletItem>
            <BulletItem>Carrying weapons or dangerous items in vehicles</BulletItem>
          </BulletList>
        </Subsection>

        <Subsection title="Fraud and Misconduct">
          <BulletList>
            <BulletItem>Providing false information or documentation</BulletItem>
            <BulletItem>Attempting to defraud other users or the company</BulletItem>
            <BulletItem>Creating multiple accounts to circumvent restrictions</BulletItem>
            <BulletItem>Manipulating ratings or reviews</BulletItem>
          </BulletList>
        </Subsection>

        <Subsection title="Inappropriate Content">
          <BulletList>
            <BulletItem>Sharing explicit, violent, or offensive content</BulletItem>
            <BulletItem>Using the platform for illegal activities</BulletItem>
            <BulletItem>Spamming or sending unsolicited messages</BulletItem>
            <BulletItem>Impersonating others or creating fake profiles</BulletItem>
          </BulletList>
        </Subsection>
      </Section>

      <Section title="7. REPORTING VIOLATIONS" id="reporting">
        <Paragraph>
          If you witness or experience behavior that violates these guidelines:
        </Paragraph>
        <BulletList>
          <BulletItem>Report the incident immediately through the app</BulletItem>
          <BulletItem>Provide detailed information about what occurred</BulletItem>
          <BulletItem>Include any relevant photos or documentation</BulletItem>
          <BulletItem>Cooperate with any investigation</BulletItem>
        </BulletList>
        <Paragraph>
          We take all reports seriously and will investigate promptly. Your safety and the safety of our community is our top priority.
        </Paragraph>
      </Section>

      <Section title="8. CONSEQUENCES OF VIOLATIONS" id="consequences">
        <Paragraph>
          Violations of these guidelines may result in:
        </Paragraph>
        <BulletList>
          <BulletItem>Warning or temporary suspension</BulletItem>
          <BulletItem>Permanent account termination</BulletItem>
          <BulletItem>Legal action if appropriate</BulletItem>
          <BulletItem>Reporting to law enforcement for criminal behavior</BulletItem>
        </BulletList>
        <Paragraph>
          The severity of consequences depends on the nature and frequency of violations.
        </Paragraph>
      </Section>

      <Section title="9. APPEALS PROCESS" id="appeals">
        <Paragraph>
          If you believe your account was suspended or terminated in error:
        </Paragraph>
        <BulletList>
          <BulletItem>Contact our support team within 30 days</BulletItem>
          <BulletItem>Provide any relevant evidence or context</BulletItem>
          <BulletItem>We will review your case and respond within 5 business days</BulletItem>
          <BulletItem>Our decision is final</BulletItem>
        </BulletList>
      </Section>

      <Section title="10. SAFETY TIPS" id="safety-tips">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-neutral-900 rounded-lg p-6">
            <h3 className="text-white font-bold text-lg mb-4">For Drivers:</h3>
            <BulletList>
              <BulletItem>Always verify passenger identity</BulletItem>
              <BulletItem>Trust your instincts - cancel rides if you feel unsafe</BulletItem>
              <BulletItem>Keep your vehicle well-lit and clean</BulletItem>
              <BulletItem>Have emergency contacts readily available</BulletItem>
              <BulletItem>Report any suspicious behavior immediately</BulletItem>
            </BulletList>
          </div>

          <div className="bg-neutral-900 rounded-lg p-6">
            <h3 className="text-white font-bold text-lg mb-4">For Riders:</h3>
            <BulletList>
              <BulletItem>Verify driver and vehicle information before entering</BulletItem>
              <BulletItem>Share your trip details with a trusted contact</BulletItem>
              <BulletItem>Sit in the back seat for added safety</BulletItem>
              <BulletItem>Trust your instincts - don't proceed if you feel uncomfortable</BulletItem>
              <BulletItem>Report any concerns immediately</BulletItem>
            </BulletList>
          </div>
        </div>
      </Section>

      <Section title="11. EMERGENCY CONTACTS" id="emergency">
        <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
          <h3 className="text-white font-bold text-lg mb-4">In case of emergency:</h3>
          <BulletList>
            <BulletItem><Strong>Call 911 immediately for life-threatening situations</Strong></BulletItem>
            <BulletItem>Contact Loop support for platform-related issues</BulletItem>
          </BulletList>
        </div>
      </Section>

      <Section title="12. UPDATES TO GUIDELINES" id="updates">
        <Paragraph>
          We may update these Community Guidelines from time to time to reflect changes in our services or community needs. We will notify users of significant changes through the Platform.
        </Paragraph>
      </Section>

      <Section title="13. CONTACT US" id="contact">
        <Paragraph>
          If you have questions about these Community Guidelines or need to report a violation:
        </Paragraph>
        <div className="bg-neutral-900 rounded-lg p-6 mt-4">
          <p className="text-neutral-300 mb-2">
            <Strong>Loop Platform, Inc.</Strong>
          </p>
          <p className="text-neutral-300 mb-2">
            Email: <a href="mailto:developer.loop.acc@icloud.com" className="text-blue-400 hover:text-blue-300">developer.loop.acc@icloud.com</a>
          </p>
          <p className="text-neutral-300 mb-2">
            Website: <a href="https://looprides.dev" className="text-blue-400 hover:text-blue-300">looprides.dev</a>
          </p>
          <p className="text-neutral-300">
            Support: Available through the Loop app
          </p>
        </div>
        <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4 mt-4">
          <p className="text-white font-bold">
            For safety emergencies: Call 911 immediately
          </p>
        </div>
      </Section>
    </LegalLayout>
  );
}