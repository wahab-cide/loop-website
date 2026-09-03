/**
 * The product screens shown on the site.
 *
 * These are drawn, not screenshotted. Each frame is the 390 x 844 markup from
 * assets/poolup-website-screens ("poolUp Website Screens.dc.html"), which was
 * read out of the app's own components and then corrected where the shipped code
 * breaks the brand rules — the violet mutual-friends text, the green primary
 * button, the slate pricing card and so on are all fixed here.
 *
 * Screenshots were the previous approach and they drift: the ones this replaced
 * still showed the pre-rebrand UI. Vector frames cost no image weight, stay sharp
 * at any density, and can be corrected in place when the app changes.
 *
 * Frames render at their natural 390 x 844 and are scaled by the caller.
 */

export const FRAME_WIDTH = 390;
export const FRAME_HEIGHT = 844;

export function RideDetailsFrame() {
  return (
    <div style={{ width: "390px", height: "844px", background: "#000000", borderRadius: "44px", border: "1px solid #262626", boxShadow: "inset 0 0 0 7px #0A0A0A", overflow: "hidden", display: "flex", flexDirection: "column", flexShrink: "0" }}>
            <div style={{ height: "54px", display: "flex", alignItems: "flex-end", justifyContent: "space-between", padding: "0 26px 6px", fontSize: "13px", fontWeight: "600", color: "#FAFAFA", flexShrink: "0" }}>
              <span>9:41</span>
              <div style={{ display: "flex", gap: "6px", alignItems: "center" }}><span style={{ width: "16px", height: "9px", border: "1px solid #6E6E6E", borderRadius: "2px", display: "block" }}></span><span style={{ width: "22px", height: "9px", background: "#6E6E6E", borderRadius: "2px", display: "block" }}></span></div>
            </div>
            <div style={{ padding: "12px 16px", display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #374151", flexShrink: "0" }}>
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#FFFFFF" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" style={{ display: "block", flexShrink: "0" }}><path d="M15 4.5L7.5 12l7.5 7.5"></path></svg>
              <span style={{ fontSize: "17px", fontWeight: "600", color: "#FFFFFF" }}>Ride Details</span>
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#9CA3AF" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" style={{ display: "block", flexShrink: "0" }}><circle cx="18" cy="5.2" r="2.8"></circle><circle cx="6" cy="12" r="2.8"></circle><circle cx="18" cy="18.8" r="2.8"></circle><path d="M8.5 10.6l7-3.9M8.5 13.4l7 3.9"></path></svg>
            </div>

            <div style={{ flex: "1", overflow: "hidden", display: "flex", flexDirection: "column", padding: "0 16px" }}>
              <div style={{ paddingTop: "24px", flexShrink: "0" }}>
                <div style={{ background: "#0D0D0D", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "16px", padding: "16px", display: "flex", alignItems: "center", gap: "16px" }}>
                  <div style={{ width: "64px", height: "64px", borderRadius: "999px", background: "#1F1F1F", border: "2px solid rgba(0,229,255,0.35)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", fontWeight: "700", color: "#9CA3AF", flexShrink: "0" }}>MR</div>
                  <div style={{ flex: "1", display: "flex", flexDirection: "column", gap: "4px", minWidth: "0" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      <span style={{ fontSize: "18px", fontWeight: "600", color: "#FFFFFF" }}>Maya</span>
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#00E5FF" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" style={{ display: "block", flexShrink: "0" }}><circle cx="12" cy="12" r="9"></circle><path d="M8 12.2l2.9 2.9L16.2 9"></path></svg>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      <svg viewBox="0 0 24 24" width="14" height="14" style={{ display: "block", flexShrink: "0" }}><path d="M12 3.2l2.75 5.7 6.25.85-4.55 4.4 1.1 6.2L12 17.4l-5.55 2.95 1.1-6.2L3 9.75l6.25-.85z" fill="#F59E0B"></path></svg>
                      <span style={{ fontSize: "14px", color: "#D1D5DB" }}>4.9</span>
                      <span style={{ fontSize: "14px", color: "#9CA3AF" }}>· 34 rides</span>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ paddingTop: "16px", display: "flex", flexDirection: "column", gap: "16px", flexShrink: "0" }}>
                <span style={{ fontSize: "24px", fontWeight: "700", color: "#FFFFFF", lineHeight: "1.2" }}>Williamstown → Boston</span>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#9CA3AF" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" style={{ display: "block", flexShrink: "0" }}><circle cx="12" cy="12" r="9"></circle><path d="M12 7.5V12l3.2 2"></path></svg>
                  <span style={{ fontSize: "16px", color: "#D1D5DB" }}>Friday, October 3, 2026</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#9CA3AF" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" style={{ display: "block", flexShrink: "0" }}><circle cx="12" cy="12" r="9"></circle><path d="M12 7.5V12l3.2 2"></path></svg>
                  <span style={{ fontSize: "16px", color: "#D1D5DB" }}>Departure: 04:15 PM</span>
                </div>
                <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: "12px", padding: "16px", display: "flex", flexDirection: "column", gap: "12px" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#9CA3AF" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" style={{ display: "block", flexShrink: "0", marginTop: "4px" }}><path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z"></path><circle cx="12" cy="10" r="2.6"></circle></svg>
                    <div style={{ display: "flex", flexDirection: "column", gap: "4px", minWidth: "0" }}>
                      <span style={{ fontSize: "12px", fontWeight: "500", color: "#9CA3AF", letterSpacing: "0.03em" }}>PICKUP</span>
                      <span style={{ fontSize: "16px", lineHeight: "1.35", color: "#FFFFFF" }}>Paresky Center, Williamstown, MA 01267</span>
                    </div>
                  </div>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#00E5FF" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" style={{ display: "block", flexShrink: "0", marginTop: "4px" }}><path d="M3 11l18-8-8 18-2-8-8-2z"></path></svg>
                    <div style={{ display: "flex", flexDirection: "column", gap: "4px", minWidth: "0" }}>
                      <span style={{ fontSize: "12px", fontWeight: "500", color: "#9CA3AF", letterSpacing: "0.03em" }}>DROP-OFF</span>
                      <span style={{ fontSize: "16px", lineHeight: "1.35", color: "#FFFFFF" }}>Logan International Airport, Boston, MA</span>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ paddingTop: "24px", flexShrink: "0" }}>
                <div style={{ background: "#161616", border: "1px solid rgba(255,255,255,0.10)", borderRadius: "12px", padding: "16px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                    <span style={{ fontSize: "14px", color: "#9CA3AF" }}>Price per seat</span>
                    <span style={{ fontSize: "24px", fontWeight: "700", color: "#00E5FF" }}>$24</span>
                    <span style={{ background: "rgba(0,229,255,0.12)", color: "#00E5FF", fontSize: "12px", fontWeight: "500", borderRadius: "999px", padding: "4px 9px", marginTop: "4px" }}>Cost shared across the car</span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "4px", alignItems: "flex-end" }}>
                    <span style={{ fontSize: "14px", color: "#9CA3AF" }}>Seats available</span>
                    <span style={{ fontSize: "24px", fontWeight: "700", color: "#00E5FF" }}>2/4</span>
                  </div>
                </div>
              </div>

              <div style={{ paddingTop: "18px", display: "flex", flexDirection: "column", gap: "6px", flexShrink: "0" }}>
                <span style={{ fontSize: "18px", fontWeight: "600", color: "#FFFFFF" }}>About this ride</span>
                <span style={{ fontSize: "16px", lineHeight: "24px", color: "#D1D5DB" }}>Two bags each, back Sunday night.</span>
              </div>
            </div>

            <div style={{ borderTop: "1px solid rgba(255,255,255,0.10)", padding: "16px 16px 30px", flexShrink: "0" }}>
              <span style={{ display: "block", background: "#00E5FF", color: "#0A0A0A", fontSize: "16px", fontWeight: "700", borderRadius: "999px", padding: "18px 0", textAlign: "center" }}>Book This Ride</span>
            </div>
          </div>
  );
}

export function SharedPricingFrame() {
  return (
    <div style={{ width: "390px", height: "844px", background: "#000000", borderRadius: "44px", border: "1px solid #262626", boxShadow: "inset 0 0 0 7px #0A0A0A", overflow: "hidden", display: "flex", flexDirection: "column", flexShrink: "0" }}>
            <div style={{ height: "54px", display: "flex", alignItems: "flex-end", justifyContent: "space-between", padding: "0 26px 6px", fontSize: "13px", fontWeight: "600", color: "#FAFAFA", flexShrink: "0" }}>
              <span>9:41</span>
              <div style={{ display: "flex", gap: "6px", alignItems: "center" }}><span style={{ width: "16px", height: "9px", border: "1px solid #6E6E6E", borderRadius: "2px", display: "block" }}></span><span style={{ width: "22px", height: "9px", background: "#6E6E6E", borderRadius: "2px", display: "block" }}></span></div>
            </div>
            <div style={{ padding: "12px 16px", display: "flex", alignItems: "center", gap: "14px", borderBottom: "1px solid rgba(255,255,255,0.06)", flexShrink: "0" }}>
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#FFFFFF" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" style={{ display: "block", flexShrink: "0" }}><path d="M15 4.5L7.5 12l7.5 7.5"></path></svg>
              <span style={{ fontSize: "17px", fontWeight: "600", color: "#FFFFFF" }}>Shared Ride Pricing</span>
            </div>

            <div style={{ flex: "1", display: "flex", flexDirection: "column", gap: "14px", padding: "14px 16px 0" }}>
              <div style={{ background: "#161616", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "18px", padding: "22px", display: "flex", flexDirection: "column", gap: "20px", flexShrink: "0" }}>
                <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "12px" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                    <span style={{ fontSize: "12.5px", color: "#6B7280" }}>Original Price</span>
                    <span style={{ fontFamily: "Jua,sans-serif", fontSize: "30px", lineHeight: "1", color: "#6B7280", textDecoration: "line-through" }}>$32.00</span>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "5px", alignItems: "flex-end" }}>
                    <span style={{ fontSize: "12.5px", color: "#6B7280" }}>New Price</span>
                    <span style={{ fontFamily: "Jua,sans-serif", fontSize: "44px", lineHeight: "1", color: "#00E5FF" }}>$16.00</span>
                  </div>
                </div>
                <div style={{ background: "rgba(0,229,255,0.10)", borderRadius: "12px", padding: "14px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "9px" }}>
                    <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="#00E5FF" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" style={{ display: "block", flexShrink: "0" }}><circle cx="12" cy="12" r="9"></circle><path d="M8 12.2l2.9 2.9L16.2 9"></path></svg>
                    <span style={{ fontSize: "14.5px", fontWeight: "600", color: "#00E5FF" }}>You save $16.00</span>
                  </div>
                  <span style={{ background: "rgba(0,229,255,0.16)", color: "#00E5FF", fontSize: "12px", fontWeight: "700", borderRadius: "999px", padding: "5px 11px" }}>50% OFF</span>
                </div>
              </div>

              <div style={{ background: "#161616", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "18px", padding: "22px", display: "flex", flexDirection: "column", gap: "18px", flexShrink: "0" }}>
                <span style={{ fontSize: "15px", fontWeight: "600", color: "#FAFAFA" }}>The price drops as seats fill</span>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <span style={{ width: "74px", fontSize: "12.5px", color: "#9CA3AF" }}>1 rider</span>
                    <span style={{ flex: "1", height: "8px", borderRadius: "999px", background: "#262626", display: "block", position: "relative", overflow: "hidden" }}><span style={{ position: "absolute", left: "0", top: "0", bottom: "0", width: "100%", background: "#3A3A3A", borderRadius: "999px", display: "block" }}></span></span>
                    <span style={{ width: "56px", textAlign: "right", fontFamily: "Jua,sans-serif", fontSize: "16px", color: "#9CA3AF" }}>$32</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <span style={{ width: "74px", fontSize: "12.5px", color: "#9CA3AF" }}>2 riders</span>
                    <span style={{ flex: "1", height: "8px", borderRadius: "999px", background: "#262626", display: "block", position: "relative", overflow: "hidden" }}><span style={{ position: "absolute", left: "0", top: "0", bottom: "0", width: "75%", background: "#3A3A3A", borderRadius: "999px", display: "block" }}></span></span>
                    <span style={{ width: "56px", textAlign: "right", fontFamily: "Jua,sans-serif", fontSize: "16px", color: "#9CA3AF" }}>$24</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <span style={{ width: "74px", fontSize: "12.5px", color: "#9CA3AF" }}>3 riders</span>
                    <span style={{ flex: "1", height: "8px", borderRadius: "999px", background: "#262626", display: "block", position: "relative", overflow: "hidden" }}><span style={{ position: "absolute", left: "0", top: "0", bottom: "0", width: "60%", background: "#3A3A3A", borderRadius: "999px", display: "block" }}></span></span>
                    <span style={{ width: "56px", textAlign: "right", fontFamily: "Jua,sans-serif", fontSize: "16px", color: "#9CA3AF" }}>$19.20</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <span style={{ width: "74px", fontSize: "12.5px", fontWeight: "700", color: "#00E5FF" }}>4 riders</span>
                    <span style={{ flex: "1", height: "8px", borderRadius: "999px", background: "#262626", display: "block", position: "relative", overflow: "hidden" }}><span style={{ position: "absolute", left: "0", top: "0", bottom: "0", width: "50%", background: "#00E5FF", borderRadius: "999px", display: "block" }}></span></span>
                    <span style={{ width: "56px", textAlign: "right", fontFamily: "Jua,sans-serif", fontSize: "16px", color: "#00E5FF" }}>$16</span>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "11px", paddingTop: "2px" }}>
                  <div style={{ display: "flex", gap: "7px" }}>
                    <span style={{ width: "26px", height: "26px", borderRadius: "999px", background: "#00E5FF", display: "block" }}></span>
                    <span style={{ width: "26px", height: "26px", borderRadius: "999px", background: "#00E5FF", display: "block" }}></span>
                    <span style={{ width: "26px", height: "26px", borderRadius: "999px", background: "#00E5FF", display: "block" }}></span>
                    <span style={{ width: "26px", height: "26px", borderRadius: "999px", border: "2px dashed #333", display: "block" }}></span>
                  </div>
                  <span style={{ fontSize: "12.5px", color: "#6B7280" }}>Fills at 4 · everyone pays $16</span>
                </div>
              </div>

              <div style={{ background: "#0D0D0D", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "16px", padding: "16px", display: "flex", flexDirection: "column", gap: "6px", flexShrink: "0" }}>
                <span style={{ fontSize: "13.5px", fontWeight: "600", color: "#FAFAFA" }}>Maya collects $64.00</span>
                <span style={{ fontSize: "13px", lineHeight: "1.6", color: "#8F8F8F" }}>Splitting does not cut the driver's total — it doubles it. Four seats at $16 is twice one seat at $32.</span>
              </div>
            </div>

            <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", background: "#0D0D0D", padding: "14px 16px 30px", display: "flex", alignItems: "center", gap: "14px", flexShrink: "0" }}>
              <span style={{ flex: "1", background: "#00E5FF", color: "#0A0A0A", fontSize: "16px", fontWeight: "700", borderRadius: "999px", padding: "16px 0", textAlign: "center" }}>Take the last seat · $16</span>
            </div>
          </div>
  );
}

export function PostRideFrame() {
  return (
    <div style={{ width: "390px", height: "844px", background: "#000000", borderRadius: "44px", border: "1px solid #262626", boxShadow: "inset 0 0 0 7px #0A0A0A", overflow: "hidden", display: "flex", flexDirection: "column", flexShrink: "0" }}>
            <div style={{ height: "54px", display: "flex", alignItems: "flex-end", justifyContent: "space-between", padding: "0 26px 6px", fontSize: "13px", fontWeight: "600", color: "#FAFAFA", flexShrink: "0" }}>
              <span>9:41</span>
              <div style={{ display: "flex", gap: "6px", alignItems: "center" }}><span style={{ width: "16px", height: "9px", border: "1px solid #6E6E6E", borderRadius: "2px", display: "block" }}></span><span style={{ width: "22px", height: "9px", background: "#6E6E6E", borderRadius: "2px", display: "block" }}></span></div>
            </div>
            <div style={{ flex: "1", overflow: "hidden", display: "flex", flexDirection: "column", padding: "8px 20px 0" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px", flexShrink: "0" }}>
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#FFFFFF" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" style={{ display: "block", flexShrink: "0" }}><path d="M15 4.5L7.5 12l7.5 7.5"></path></svg>
                <span style={{ fontSize: "17px", fontWeight: "500", color: "#FFFFFF" }}>Back</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "3px", marginBottom: "8px", flexShrink: "0" }}>
                <span style={{ fontSize: "25px", fontWeight: "800", color: "#FFFFFF", lineHeight: "1.1" }}>Post a Ride</span>
                <span style={{ fontSize: "15px", fontWeight: "500", color: "#9CA3AF" }}>Share your journey with others</span>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "8px", flexShrink: "0" }}>
                <span style={{ fontSize: "17px", fontWeight: "600", color: "#FFFFFF" }}>Where are you going?</span>
                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  <span style={{ fontSize: "13.5px", fontWeight: "500", color: "#9CA3AF", paddingLeft: "4px" }}>From</span>
                  <div style={{ background: "#161616", border: "1px solid #4B5563", borderRadius: "12px", padding: "10px 16px", minHeight: "44px", display: "flex", alignItems: "center", gap: "8px", boxSizing: "border-box" }}>
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#00E5FF" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" style={{ display: "block", flexShrink: "0" }}><path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z"></path><circle cx="12" cy="10" r="2.6"></circle></svg>
                    <span style={{ fontSize: "16px", color: "#FFFFFF" }}>Paresky Center, Williamstown</span>
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  <span style={{ fontSize: "13.5px", fontWeight: "500", color: "#9CA3AF", paddingLeft: "4px" }}>To</span>
                  <div style={{ background: "#161616", border: "1px solid #4B5563", borderRadius: "12px", padding: "10px 16px", minHeight: "44px", display: "flex", alignItems: "center", gap: "8px", boxSizing: "border-box" }}>
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#00E5FF" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" style={{ display: "block", flexShrink: "0" }}><path d="M3 11l18-8-8 18-2-8-8-2z"></path></svg>
                    <span style={{ fontSize: "16px", color: "#FFFFFF" }}>Logan Airport, Boston</span>
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "8px", flexShrink: "0" }}>
                <span style={{ fontSize: "17px", fontWeight: "600", color: "#FFFFFF" }}>When?</span>
                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  <span style={{ fontSize: "13.5px", fontWeight: "500", color: "#9CA3AF", paddingLeft: "4px" }}>Date *</span>
                  <div style={{ background: "#161616", border: "1px solid #4B5563", borderRadius: "12px", padding: "10px 16px", minHeight: "44px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px", boxSizing: "border-box" }}>
                    <span style={{ fontSize: "16px", fontWeight: "500", color: "#FFFFFF" }}>Fri, Oct 3, 2026</span>
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#9CA3AF" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" style={{ display: "block", flexShrink: "0" }}><circle cx="12" cy="12" r="9"></circle><path d="M12 7.5V12l3.2 2"></path></svg>
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  <span style={{ fontSize: "13.5px", fontWeight: "500", color: "#9CA3AF", paddingLeft: "4px" }}>Time *</span>
                  <div style={{ background: "#161616", border: "1px solid #4B5563", borderRadius: "12px", padding: "10px 16px", minHeight: "44px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px", boxSizing: "border-box" }}>
                    <span style={{ fontSize: "16px", fontWeight: "500", color: "#FFFFFF" }}>4:15 PM</span>
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#9CA3AF" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" style={{ display: "block", flexShrink: "0" }}><circle cx="12" cy="12" r="9"></circle><path d="M12 7.5V12l3.2 2"></path></svg>
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "8px", flexShrink: "0" }}>
                <span style={{ fontSize: "17px", fontWeight: "600", color: "#FFFFFF" }}>Trip details</span>
                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  <span style={{ fontSize: "13.5px", fontWeight: "500", color: "#9CA3AF", paddingLeft: "4px" }}>Seats available *</span>
                  <div style={{ background: "#161616", border: "1px solid #4B5563", borderRadius: "12px", padding: "10px 16px", minHeight: "44px", display: "flex", alignItems: "center", boxSizing: "border-box" }}>
                    <span style={{ fontSize: "16px", fontWeight: "500", color: "#FFFFFF" }}>4</span>
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  <span style={{ fontSize: "13.5px", fontWeight: "500", color: "#9CA3AF", paddingLeft: "4px" }}>Carpool cost per seat *</span>
                  <div style={{ background: "#161616", border: "1px solid #4B5563", borderRadius: "12px", padding: "10px 16px", minHeight: "44px", display: "flex", alignItems: "center", boxSizing: "border-box" }}>
                    <span style={{ fontSize: "16px", fontWeight: "500", color: "#FFFFFF" }}>32</span>
                  </div>
                </div>
                <div style={{ background: "#161616", border: "2px solid rgba(75,85,99,0.4)", borderRadius: "16px", padding: "12px 16px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px", marginTop: "1px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <span style={{ width: "32px", height: "32px", borderRadius: "999px", background: "rgba(0,229,255,0.20)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0" }}><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#40EEFF" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" style={{ display: "block", flexShrink: "0" }}><circle cx="12" cy="12" r="9"></circle><path d="M8 12.2l2.9 2.9L16.2 9"></path></svg></span>
                    <span style={{ fontSize: "14px", fontWeight: "600", color: "#E5E7EB" }}>Suggested Price</span>
                  </div>
                  <span style={{ fontSize: "20px", fontWeight: "800", color: "#FFFFFF" }}>$31.40</span>
                </div>
              </div>
            </div>
          </div>
  );
}
