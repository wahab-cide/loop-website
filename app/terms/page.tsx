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

export const metadata: Metadata = {
  title: "Terms of Service | Loop - Student Rideshare App",
  description: "Read Loop Platform, Inc.'s Terms of Service to understand your rights and obligations when using our rideshare platform.",
};

export default function TermsOfService() {
  return (
    <LegalLayout title="Terms of Service" lastUpdated="July 2025">
      <Section title="1. OVERVIEW" id="overview">
        <Subsection title="About the Company">
          <Paragraph>
            Loop Platform, Inc., a Delaware corporation, and its affiliates ("Loop," or the "Company") operate the website located at looprides.dev, the "Loop" mobile application available from the Apple App Store, Android Play Store, and other related websites, mobile applications, products and services including the Loop Services (as defined below) (collectively, the "Platform").
          </Paragraph>
          <Paragraph>
            Please read this Agreement carefully before using our Platform. By accessing, viewing or using the Platform, including by registering for an account or by using the Driver Services (as defined below), you agree to be bound by this Agreement, our Privacy Policy (as defined below), and to all other terms, conditions, policies and notices that appear on the Platform, including the additional Driver terms and conditions (applicable to Drivers) contained below (collectively, this "Agreement").
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
            <Strong>"Content"</Strong> means all information, text, graphics, functionality, works of authorship, logos, trademarks and other content available on or through the Platform and the Loop Services, excluding Submitted Content.
          </div>
          
          <div>
            <Strong>"Driver"</Strong> means a user who is accepted and completes Onboarding by the Company to provide Driver Services, which include primarily, though not exclusively, point to point Rides in a vehicle provided by the Driver and approved by the Company.
          </div>
          
          <div>
            <Strong>"Driver Applicant"</Strong> means a user who begins an application to become a Driver.
          </div>
          
          <div>
            <Strong>"Driver Services"</Strong> means Rides, and any other transportation-related services provided by any Driver that is facilitated by the Platform.
          </div>
          
          <div>
            <Strong>"Loop Services"</Strong> means the Platform and the related proprietary system, mobile applications, websites, products, information, tools, software, interfaces, functionality, and services owned, operated or provided by the Company through the Platform.
          </div>
          
          <div>
            <Strong>"Onboarding"</Strong> means our process of accepting an application by a Driver Applicant to become a Driver, and preparing that new Driver to use our Platform to provide Driver Services.
          </div>
          
          <div>
            <Strong>"Ride"</Strong> refers to the event of transporting a non-driving human (i.e., a Rider) in a motor vehicle provided by a Driver from the point of pick up to the point of drop off.
          </div>
          
          <div>
            <Strong>"Rider"</Strong> means a non-driving human user who uses the Platform to discover, identify, request, order, purchase, schedule or participate in Rides provided by Drivers.
          </div>
          
          <div>
            <Strong>"User"</Strong> or "you" or "your" means any person who views, accesses, or uses the Platform in any way.
          </div>
        </div>
      </Section>

      <Section title="3. THE SERVICES" id="services">
        <Subsection title="About the Services">
          <Paragraph>
            Loop provides, by way of the Platform, a marketplace for offering, posting, listing, requesting, searching for, discovering, inquiring about, marketing, scheduling, and arranging for Rides by and among Drivers and Riders.
          </Paragraph>
          <Paragraph>
            The Platform is a set of online and mobile tools that match Riders with Drivers to facilitate the delivery and servicing of Rides by Drivers.
          </Paragraph>
          <Paragraph>
            <Highlight>The Company does not provide transportation services, and the Company is not a transportation carrier, common carrier, or public carrier.</Highlight> It is up to the Driver to decide whether or not to offer a Ride to a Rider contacted through the Platform.
          </Paragraph>
        </Subsection>

        <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-6 my-8">
          <p className="text-white font-bold text-lg mb-4">IMPORTANT SAFETY NOTICE</p>
          <p className="text-red-300 mb-4">
            <Strong>AS A RIDER, YOU AGREE AND ACKNOWLEDGE THAT ANY RIDE OR DRIVER SERVICES THAT YOU ORDER, PURCHASE, PARTICIPATE IN OR RECEIVE IS AT YOUR OWN RISK AND SOLE RESPONSIBILITY.</Strong>
          </p>
          <p className="text-red-300">
            <Strong>WE DO NOT PROVIDE DRIVERS WITH INSURANCE COVERAGE. EACH DRIVER IS RESPONSIBLE FOR CARRYING AN ACTIVE INSURANCE POLICY WITH APPLICABLE RIDESHARE RIDERS, ADDENDUMS, AND COVERAGE AS REQUIRED BY THE LOCALITIES IN WHICH THEY OPERATE.</Strong>
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

      <Section title="5. FEES AND CHARGES" id="fees-charges">
        <Subsection title="Fees Charged to Riders">
          <Paragraph>
            As a Rider, you will be charged fees ("Fees") for Rides and Driver Services that you purchase through the Platform. Any Fees charged to you through your user account for Rides and Driver Services will be payable by you through the Platform.
          </Paragraph>
        </Subsection>

        <Subsection title="Service Charges">
          <Paragraph>
            For certain Driver types, the Company charges and collects a percentage of the total Fees charged to Riders (the "Service Charge") depending on the length of the applicable Ride provided and other factors.
          </Paragraph>
        </Subsection>

        <Subsection title="Tips">
          <Paragraph>
            Riders may, following a Ride, elect to pay an additional amount to the Driver as a tip for the Ride. Tips should be paid to Drivers using the Platform. No Service Charge or processing fees are deducted from any tips paid by Riders to Drivers.
          </Paragraph>
        </Subsection>

        <Subsection title="Damage Fee">
          <Paragraph>
            If a Driver reports that you have materially damaged or soiled the Driver's vehicle, you agree to pay a "Damage Fee" of up to reasonable costs to bring the vehicle to its former condition.
          </Paragraph>
        </Subsection>
      </Section>

      <Section title="6. DRIVER PAYMENT AMOUNTS FOR RIDES AND DRIVER SERVICES" id="driver-payments">
        <Paragraph>
          If you are a Driver, you will either receive an agreed-upon amount for a round trip or one way drive, or you will receive payment of a portion of the Fees charged to Riders for your provision of Rides and Driver Services to such Riders.
        </Paragraph>
      </Section>

      <Section title="7. ADDITIONAL DRIVER TERMS" id="driver-terms">
        <Subsection title="Driver Representations, Warranties, and Agreements">
          <Paragraph>
            By offering and providing Rides and Driver Services as a Driver using the Platform, you represent, warrant, covenant and agree that, at all times during which you are a Driver:
          </Paragraph>
          
          <div className="space-y-4 mt-6">
            <ListItem number="1">
              You possess a valid driver's license issued by one of the 50 states in the U.S.A. and are authorized and medically fit to operate a motor vehicle.
            </ListItem>
            
            <ListItem number="2">
              You own or have the legal right to operate the vehicle you use when providing Driver Services.
            </ListItem>
            
            <ListItem number="3">
              You are covered by an active personal auto insurance policy covering your vehicle that contains the state minimum liability coverage and limits.
            </ListItem>
            
            <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4">
              <ListItem number="4">
                <Strong>YOU ACKNOWLEDGE THAT YOUR PERSONAL AUTO POLICY COVERAGE MAY BE INVALID OR INSUFFICIENT WHILE YOU ARE PROVIDING SERVICES ON LOOP. IT IS YOUR RESPONSIBILITY TO UNDERSTAND YOUR OWN POLICIES LIMITATIONS AND RESTRICTIONS.</Strong>
              </ListItem>
            </div>
            
            <ListItem number="5">
              You will not engage in reckless behavior while driving, drive unsafely, or provide Driver Services while under the influence of alcohol or drugs.
            </ListItem>
            
            <ListItem number="6">
              You will only provide and service Rides when you have had adequate sleep and are not excessively tired.
            </ListItem>
            
            <ListItem number="7">
              You will only provide Rides using the vehicle that has been reported to and approved by the Company during your Driver Onboarding process.
            </ListItem>
            
            <ListItem number="8">
              You will not operate as a public or common carrier or taxi service, accept street hails, or charge for Rides except through the Platform.
            </ListItem>
            
            <ListItem number="9">
              You may not accept payment from any user or Rider in cash or in any other form than payment that is processed through the Platform.
            </ListItem>
            
            <ListItem number="10">
              You will not stalk, threaten, or otherwise harass any person, or carry unlawful weapons.
            </ListItem>
            
            <ListItem number="11">
              You will not provide any services for any other rideshare platform while providing Driver Services.
            </ListItem>
            
            <ListItem number="12">
              You will not attempt to defraud the Company or Riders on the Platform.
            </ListItem>
            
            <ListItem number="13">
              You will treat all passengers with respect and dignity.
            </ListItem>
            
            <ListItem number="14">
              You will not discriminate against any passenger based on race, religion, nationality, age, sex, gender, or disability.
            </ListItem>
            
            <ListItem number="15">
              You will make reasonable accommodations for Riders and/or for service animals, as required by law.
            </ListItem>
            
            <ListItem number="16">
              You agree that we may obtain information about you, including your criminal and driving records.
            </ListItem>
            
            <ListItem number="17">
              You will pay all applicable federal, state, and local taxes based on your provision of Driver Services.
            </ListItem>
            
            <ListItem number="18">
              You understand that you are an independent contractor, not under our control or employ.
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
            Email: <a href="mailto:developer.loop.acc@icloud.com" className="text-blue-400 hover:text-blue-300">developer.loop.acc@icloud.com</a>
          </p>
          <p className="text-neutral-300">
            Website: <a href="https://looprides.dev" className="text-blue-400 hover:text-blue-300">looprides.dev</a>
          </p>
        </div>
      </Section>
    </LegalLayout>
  );
}