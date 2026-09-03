import type { Metadata } from "next";
import { 
  LegalLayout, 
  Section, 
  Subsection, 
  Paragraph, 
  ListItem,
  Strong,
  Highlight
} from "@/components/legal-layout";
import { CONTACT_EMAIL } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Terms of Service | poolUp - Student Rideshare App",
  description: "Read Loop Platform, Inc.'s Terms of Service to understand your rights and obligations when using our rideshare platform.",
};

export default function TermsOfService() {
  return (
    <LegalLayout title="Terms of Service" lastUpdated="September 2026">
      <Section title="1. OVERVIEW" id="overview">
        <Subsection title="About the Company">
          <Paragraph>
            Loop Platform, Inc., a Delaware corporation, and its affiliates ("poolUp," or the "Company") operate the website located at looprides.dev, the "poolUp" mobile application available from the Apple App Store, Android Play Store, and other related websites, mobile applications, products and services including the poolUp Services (as defined below) (collectively, the "Platform").
          </Paragraph>
          <Paragraph>
            <Highlight>poolUp is a social networking platform designed exclusively for college students.</Highlight> The Platform enables students to create profiles, connect with other verified students at their college, communicate through messaging features, share information, and coordinate various activities including shared transportation arrangements. The Platform facilitates peer-to-peer connections and interactions between students, allowing them to post, discover, and respond to user-generated content.
          </Paragraph>
          <Paragraph>
            Please read this Agreement carefully before using our Platform. By accessing, viewing or using the Platform, including by registering for an account or posting content on the Platform, you agree to be bound by this Agreement, our Privacy Policy (as defined below), and to all other terms, conditions, policies and notices that appear on the Platform, including the additional terms for users who post rideshare opportunities (collectively, this "Agreement").
          </Paragraph>
          <Paragraph>
            You can review the most current version of this Agreement at any time on the Platform, available at looprides.dev/terms. We reserve the right in our sole discretion to update, change or replace any part of this Agreement by posting updates and/or changes to this Agreement on our Platform.
          </Paragraph>
        </Subsection>
      </Section>

      <Section title="2. DEFINITIONS" id="definitions">
        <Paragraph>
          Capitalized terms used in this Agreement have the meanings assigned to such terms in the text of this Agreement, or as set forth immediately below:
        </Paragraph>
        
        <div className="space-y-4 mt-6">
          <div>
            <Strong>"Content"</Strong> means all information, text, graphics, functionality, works of authorship, logos, trademarks and other content available on or through the Platform and the poolUp Services, excluding User-Generated Content.
          </div>

          <div>
            <Strong>"User-Generated Content"</Strong> means any content, information, posts, messages, or data submitted, posted, or shared by users on the Platform, including but not limited to ride posts, profile information, messages, and reviews.
          </div>

          <div>
            <Strong>"Driver"</Strong> means a verified user who posts user-generated content about available rides they are personally taking and is willing to share seats with other students traveling similar routes. Drivers are independent third parties, not agents or employees of poolUp.
          </div>

          <div>
            <Strong>"Driver Verification"</Strong> means our process of confirming a user's .edu email address and collecting the vehicle information they provide before allowing them to post ride opportunities. <Strong>It does not include criminal background checks, driving record checks, or verification of a driver's licence or insurance.</Strong> Users represent that they hold these as set out in Section 7, and are responsible for the accuracy of that representation.
          </div>

          <div>
            <Strong>"Shared Ride" or "Ride"</Strong> refers to a voluntary carpooling arrangement between independent users where one user (Driver) shares available seats in their personal vehicle with other users (Riders) traveling a similar route, typically with cost-sharing for expenses like gas and tolls. All rides are arranged directly between users as independent parties.
          </div>

          <div>
            <Strong>"Rider"</Strong> means a user who views ride posts on the Platform and connects with Drivers to arrange shared transportation. Riders are independent third parties who make their own arrangements with Drivers.
          </div>

          <div>
            <Strong>"poolUp Services"</Strong> means the social networking Platform and related system, mobile applications, websites, tools, software, interfaces, messaging features, profile management, and community connection services owned, operated or provided by the Company.
          </div>

          <div>
            <Strong>"User"</Strong> or "you" or "your" means any person who views, accesses, or uses the Platform in any way, including those who create profiles, post content, or interact with other users.
          </div>
        </div>
      </Section>

      <Section title="3. THE SERVICES" id="services">
        <Subsection title="About the Services">
          <Paragraph>
            <Highlight>poolUp is a social networking platform that enables college students to connect, communicate, and coordinate activities with other verified students at their college.</Highlight> The Platform provides tools for users to create profiles, share information, send messages, post content, and make connections within their campus community.
          </Paragraph>
          <Paragraph>
            One feature of the Platform allows users to post user-generated content about their travel plans and coordinate shared transportation arrangements (carpooling/ridesharing) with other students. Users may post information about trips they are taking, search for others traveling similar routes, and communicate to arrange cost-sharing for expenses such as gas and tolls.
          </Paragraph>
          <Paragraph>
            <Highlight>The Company operates as an information service and social networking platform, not as a transportation provider.</Highlight> poolUp does not provide, arrange, or facilitate transportation services. The Company is not a transportation carrier, transportation network company (TNC), common carrier, or public carrier. All transportation arrangements are made directly between users as independent third parties.
          </Paragraph>
          <Paragraph>
            poolUp functions as an interactive computer service and platform for user-generated content. The Company does not create, control, or endorse the content posted by users. Users are solely responsible for their own posts, arrangements, and interactions with other users.
          </Paragraph>
        </Subsection>

        <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6 my-8">
          <p className="text-white font-bold text-lg mb-4">IMPORTANT USER RESPONSIBILITY NOTICE</p>
          <p className="text-red-300 mb-4">
            <Strong>YOU ACKNOWLEDGE THAT POOLUP IS A SOCIAL NETWORKING PLATFORM THAT ENABLES PEER-TO-PEER CONNECTIONS. ALL ARRANGEMENTS BETWEEN USERS, INCLUDING SHARED RIDES, ARE MADE DIRECTLY BETWEEN INDEPENDENT THIRD PARTIES. ANY SHARED TRANSPORTATION YOU ARRANGE OR PARTICIPATE IN THROUGH USER CONNECTIONS ON THE PLATFORM IS AT YOUR OWN RISK AND SOLE RESPONSIBILITY.</Strong>
          </p>
          <p className="text-red-300 mb-4">
            <Strong>POOLUP DOES NOT PROVIDE, ARRANGE, OR FACILITATE TRANSPORTATION. WE ARE NOT RESPONSIBLE FOR THE ACTIONS, CONDUCT, OR SAFETY OF ANY USERS.</Strong>
          </p>
          <p className="text-red-300">
            <Strong>USERS WHO DRIVE ARE SOLELY RESPONSIBLE FOR CARRYING ADEQUATE INSURANCE COVERAGE FOR THEIR VEHICLE AND PASSENGERS, INCLUDING ANY REQUIREMENTS FOR PERSONAL VEHICLE SHARING OR CARPOOLING IN THEIR LOCALITY.</Strong>
          </p>
        </div>
      </Section>

      <Section title="4. USER ACCOUNTS" id="user-accounts">
        <Paragraph>
          In order to access certain features of the Platform, you will be required to create a user account. You may never use another user's account without permission. When creating your account, you must provide accurate and complete information.
        </Paragraph>
        <Paragraph>
          You are solely responsible for the activity that occurs on your account, and you must keep your account password secure. You must notify the Company immediately of any breach of security or unauthorized use of your account.
        </Paragraph>
      </Section>

      <Section title="5. PAYMENT ARRANGEMENTS" id="payment-arrangements">
        <Subsection title="No Payment Processing by poolUp">
          <Paragraph>
            <Highlight>poolUp does not process, facilitate, or handle any payments between Riders and Drivers.</Highlight> The Platform serves solely as a marketplace to connect Riders with Drivers for the purpose of arranging rides.
          </Paragraph>
          <Paragraph>
            All payment arrangements, including the amount, method, and timing of payment for rides, are made directly between Riders and Drivers. poolUp is not a party to any payment transaction and has no control over or responsibility for such transactions.
          </Paragraph>
        </Subsection>

        <Subsection title="No Platform Fees or Service Charges">
          <Paragraph>
            poolUp does not charge Riders or Drivers any fees, service charges, or commissions for using the Platform to arrange rides. The Platform is provided as a free service to connect students for ridesharing.
          </Paragraph>
        </Subsection>

        <Subsection title="Rider and Driver Payment Responsibility">
          <Paragraph>
            As a Rider, you are solely responsible for arranging payment directly with your Driver for any ride you book through the Platform. Payment terms, amounts, and methods should be clearly discussed and agreed upon between you and the Driver before or after the ride.
          </Paragraph>
          <Paragraph>
            As a Driver, you are solely responsible for collecting payment directly from Riders for rides you provide. poolUp does not guarantee payment or handle any disputes related to payment between Riders and Drivers.
          </Paragraph>
        </Subsection>

        <Subsection title="Damage and Additional Costs">
          <Paragraph>
            If a Driver reports that you have materially damaged or soiled the Driver's vehicle, any costs or fees related to repairs or cleaning must be arranged and paid directly between you and the Driver. poolUp is not responsible for facilitating or enforcing such payments.
          </Paragraph>
        </Subsection>
      </Section>

      <Section title="6. COST SHARING" id="cost-sharing">
        <Paragraph>
          Contributions arranged through the Platform are cost sharing, not payment for a transportation service. A trip's cost is calculated as its distance at the IRS standard mileage rate, which is inclusive of fuel, maintenance, depreciation and insurance. That cost is shared among every occupant of the vehicle, <Strong>including the Driver</Strong>.
        </Paragraph>
        <Paragraph>
          <Highlight>The Platform caps what any Rider may contribute at one half of the trip's cost, and reduces each contribution further as more Riders join.</Highlight> A Driver therefore always bears a share of every trip they post, and can never recover more than that trip cost them. Nothing is charged for a Driver's time, and the Platform has no surge or demand-based pricing of any kind.
        </Paragraph>
        <Paragraph>
          A Driver may accept less than the calculated share but never more. Contributions are settled directly between Riders and Drivers; <Highlight>poolUp takes no commission, fee or portion of any contribution.</Highlight>
        </Paragraph>
        <Paragraph>
          By posting a ride, a Driver confirms they were already making that journey. The Platform is for sharing trips you are taking anyway, and is not to be used to make journeys on request.
        </Paragraph>
      </Section>

      <Section title="7. TERMS FOR USERS POSTING RIDE OPPORTUNITIES" id="driver-terms">
        <Subsection title="Requirements for Posting Rides">
          <Paragraph>
            If you choose to post user-generated content about available seats in your personal vehicle (shared rides/carpooling), you represent, warrant, and agree that:
          </Paragraph>

          <div className="space-y-4 mt-6">
            <ListItem number="1">
              You possess a valid driver's license issued by one of the 50 states in the U.S.A. and are authorized and medically fit to operate a motor vehicle.
            </ListItem>

            <ListItem number="2">
              You own or have the legal right to operate the vehicle you use for shared rides.
            </ListItem>

            <ListItem number="3">
              You maintain an active personal auto insurance policy covering your vehicle with at least your state's minimum required liability coverage.
            </ListItem>

            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
              <ListItem number="4">
                <Strong>YOU ACKNOWLEDGE THAT YOUR PERSONAL AUTO INSURANCE POLICY MAY HAVE EXCLUSIONS OR LIMITATIONS WHEN SHARING RIDES WITH OTHERS, EVEN FOR CASUAL CARPOOLING. IT IS YOUR SOLE RESPONSIBILITY TO UNDERSTAND YOUR POLICY'S TERMS AND OBTAIN ANY NECESSARY COVERAGE FOR CARPOOLING OR RIDESHARING ACTIVITIES.</Strong>
              </ListItem>
            </div>

            <ListItem number="5">
              You will operate your vehicle safely and legally, and will not drive under the influence of alcohol or drugs.
            </ListItem>

            <ListItem number="6">
              You will only drive when well-rested and not excessively fatigued.
            </ListItem>

            <ListItem number="7">
              You will only share rides using the vehicle information you provided during verification.
            </ListItem>

            <ListItem number="8">
              <Highlight>You will not operate as a taxi, livery service, transportation network company, or any form of commercial for-hire transportation service. You understand that shared rides arranged through poolUp are casual carpooling arrangements for cost-sharing among students, not commercial transportation services.</Highlight>
            </ListItem>

            <ListItem number="9">
              You will not harass, threaten, or endanger other users or carry unlawful weapons.
            </ListItem>

            <ListItem number="10">
              You will not simultaneously provide commercial transportation services (such as Uber, Lyft, or other TNCs) during trips arranged through poolUp.
            </ListItem>

            <ListItem number="11">
              You will not attempt to defraud other users or the Company.
            </ListItem>

            <ListItem number="12">
              You will treat all passengers with respect and courtesy.
            </ListItem>

            <ListItem number="13">
              You will not discriminate against any person based on race, religion, nationality, age, sex, gender, disability, or any other protected characteristic.
            </ListItem>

            <ListItem number="14">
              You will make reasonable accommodations for passengers with disabilities and service animals as required by law.
            </ListItem>

            <ListItem number="15">
              You authorize poolUp to conduct background checks and verify your driving record, should we introduce them, to maintain community safety standards. We do not currently perform these checks.
            </ListItem>

            <ListItem number="16">
              You are responsible for any tax obligations related to cost-sharing arrangements you make with other users.
            </ListItem>

            <ListItem number="17">
              <Highlight>You understand that you are an independent user making personal carpooling arrangements with other students. You are not an agent, employee, or contractor of poolUp, and poolUp does not direct, control, or supervise your activities.</Highlight>
            </ListItem>
          </div>
        </Subsection>
      </Section>

      <Section title="8. GENERAL USE OF THE SERVICES – PERMISSIONS AND RESTRICTIONS" id="general-use">
        <Paragraph>
          As a user, the Company hereby grants you permission to access, view, and use the Platform in accordance with this Agreement, provided that you agree that you will not, under any circumstances:
        </Paragraph>
        
        <div className="space-y-3 mt-6">
          <ListItem number="1">
            Distribute, publicly display, or create derivative works from any part of the Platform without our authorization.
          </ListItem>
          
          <ListItem number="2">
            Alter, copy, modify, reverse engineer, reproduce, or hack the Platform.
          </ListItem>
          
          <ListItem number="3">
            Use the Platform for any commercial uses without our express written approval.
          </ListItem>
          
          <ListItem number="4">
            Use automated systems like robots or spiders to access the Platform.
          </ListItem>
          
          <ListItem number="5">
            Collect or harvest any personally identifiable information from the Platform.
          </ListItem>
          
          <ListItem number="6">
            Transmit abusive, threatening, obscene, defamatory, or offensive information.
          </ListItem>
          
          <ListItem number="7">
            Harass, abuse, or harm another person or group.
          </ListItem>
          
          <ListItem number="8">
            Use another user's account without permission or impersonate another person.
          </ListItem>
          
          <ListItem number="9">
            Provide false or inaccurate information when registering.
          </ListItem>
          
          <ListItem number="10">
            Use the Platform for any unlawful purpose.
          </ListItem>
        </div>
      </Section>

      <Section title="9. CONTACT INFORMATION" id="contact">
        <Paragraph>
          For questions about these Terms of Service, please contact us at:
        </Paragraph>
        <div className="bg-neutral-900 rounded-lg p-6 mt-4">
          <p className="text-neutral-300 mb-2">
            <Strong>Loop Platform, Inc.</Strong>
          </p>
          <p className="text-neutral-300 mb-2">
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-blue-400 hover:text-blue-300">Email us</a>
          </p>
          <p className="text-neutral-300">
            Website: <a href="https://looprides.dev" className="text-blue-400 hover:text-blue-300">looprides.dev</a>
          </p>
        </div>
      </Section>
    </LegalLayout>
  );
}