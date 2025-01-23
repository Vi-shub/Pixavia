import { useState } from "react";

const Terms = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      {/* Terms of Service Section */}
      <section className="onovo-section gap-top-40 gap-bottom-40">
        <div className="onovo-heading align-center gap-bottom-40">
          <h1 className="onovo-title-1">
            <span>Terms of Services</span>
          </h1>
        </div>

        <div className="container">
          {/* Privacy Policy Section */}
          <h2 className="onovo-title-2">Privacy Policy</h2>
          <p>
            At Pixavia Studios, we respect your privacy and are committed to
            protecting your personal data.
          </p>

          <h3>1. Introduction</h3>
          <p>
            Pixavia Studios (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) operates the website xxx.com and provides visual content creation services. This
            Privacy Policy applies to all clients and users of Pixavia Studios.
          </p>

          <h3>2. Collection of Personal Data</h3>
          <p>We collect personal data that you voluntarily provide to us, including:</p>
          <ul>
            <li>
              <strong>Contact Information:</strong> Name, email address, phone number, and physical address.
            </li>
            <li>
              <strong>Project Details:</strong> Information about your project, including description, timeline, and budget.
            </li>
            <li>
              <strong>Payment Information:</strong> Payment details, including advance payments.
            </li>
            <li>
              <strong>Required Assets:</strong> Logos, brand guidelines, and reference materials provided by clients.
            </li>
          </ul>

          <h3>3. Use of Personal Data</h3>
          <p>We use your personal data for the following purposes:</p>
          <ul>
            <li>
              <strong>Project Management:</strong> To manage and deliver your project.
            </li>
            <li>
              <strong>Communication:</strong> To respond to your inquiries and provide updates.
            </li>
            <li>
              <strong>Payment Processing:</strong> To process payments, including advance and final payments.
            </li>
            <li>
              <strong>Compliance:</strong> To ensure the materials provided comply with legal and copyright standards.
            </li>
          </ul>

          <h3>4. Data Protection and Security</h3>
          <p>
            We implement reasonable technical and organizational measures to
            protect your personal data from unauthorized access, disclosure,
            alteration, or destruction.
          </p>

          <h3>5. Data Retention</h3>
          <p>
            We retain your personal data for as long as necessary to fulfill the
            purposes outlined in this Privacy Policy, unless a longer retention
            period is required or permitted by law.
          </p>

          <h3>6. Intellectual Property and Portfolio Use</h3>
          <p>
            Pixavia retains the right to showcase completed work in its portfolio
            and marketing materials unless explicitly stated otherwise by the client.
          </p>

          {/* Terms of Service Section */}
          <h2 className="onovo-title-2 gap-top-40 gap-bottom-40">Service Policy</h2>

          <h3>1. Project Agreement</h3>
          <p>
            By engaging Pixavia Studios for a project, you agree to the following
            terms:
          </p>
          <ul>
            <li>
              <strong>Advance Payment:</strong> A non-refundable advance payment of
              20% of the total project cost is due upon signing of this agreement.
            </li>
            <li>
              <strong>Time Duration:</strong> The project timeline will be agreed
              upon by both parties before commencement of work.
            </li>
            <li>
              <strong>Payment Terms:</strong> The remaining balance of the project
              cost will be due upon completion of the project.
            </li>
            <li>
              <strong>Revisions:</strong> Revisions must align with the original
              brief; major changes to the concept will be considered new work.
            </li>
          </ul>

          <h3>2. Cancellation Policy</h3>
          <p>
            If you cancel the project after commencement of work, you will be liable for:
          </p>
          <ul>
            <li>
              <strong>Advance Payment:</strong> The non-refundable advance payment of 20% of the total project cost.
            </li>
            <li>
              <strong>Work Completed:</strong> Payment for all work completed up
              to the cancellation date.
            </li>
          </ul>

          <h3>3. File Delivery</h3>
          <p>
            All final files will be delivered in agreed formats (e.g., JPEG, PNG, MP4). Source files (e.g., PSD, AI, 3D project files) will only be provided for an additional fee unless part of the original agreement.
          </p>

          <h3>4. Client Responsibilities</h3>
          <ul>
            <li>
              Clients must provide all required assets (logos, brand guidelines, reference material) and feedback within the agreed timeline.
            </li>
            <li>
              Delays caused by the client (e.g., incomplete information or late approvals) may require rescheduling and additional charges.
            </li>
          </ul>

          <h3>5. Limitation of Liability</h3>
          <ul>
            <li>
              Pixavia is not responsible for any damages or losses arising from the use of designs after delivery.
            </li>
            <li>
              Pixavia is not liable for copyright infringements if the client provides unlicensed or third-party materials.
            </li>
          </ul>

          <p>
            By engaging Pixavia Studios, you acknowledge that you have read,
            understood, and agree to be bound by this Privacy Policy and Terms of
            Service.
          </p>
        </div>
      </section>
    </>
  );
};

export default Terms;
