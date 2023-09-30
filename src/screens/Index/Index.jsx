import React from "react";
import { useWindowWidth } from "../../breakpoints";
import "./style.css";

export const Index = () => {
  const screenWidth = useWindowWidth();

  return (
    <div
      className="index"
      style={{
        backgroundImage:
          screenWidth < 834
            ? "url(https://cdn.animaapp.com/projects/6512e9693906ea530ab4adce/releases/651853d77403c38b35ebae28/img/home---phone.png)"
            : screenWidth >= 834 && screenWidth < 1442
            ? "url(https://cdn.animaapp.com/projects/6512e9693906ea530ab4adce/releases/65183e974b007fe4e935ebb2/img/home---tablet.png)"
            : screenWidth >= 1442
            ? "url(https://cdn.animaapp.com/projects/6512e9693906ea530ab4adce/releases/6516b7ff059508e446b20cbd/img/home.png)"
            : undefined,
        gap:
          (screenWidth >= 834 && screenWidth < 1442) || screenWidth < 834
            ? "21px"
            : screenWidth >= 1442
            ? "81px"
            : undefined,
        minWidth:
          screenWidth < 834
            ? "360px"
            : screenWidth >= 834 && screenWidth < 1442
            ? "834px"
            : screenWidth >= 1442
            ? "1442px"
            : undefined,
        overflow: screenWidth < 834 ? "hidden" : undefined,
      }}
    >
      {screenWidth < 834 && (
        <>
          <header className="header">
            <div className="div">
              <img
                className="img"
                alt="Header"
                src="https://cdn.animaapp.com/projects/6512e9693906ea530ab4adce/releases/65185053fbb7a3a4593be509/img/header@2x.png"
              />
              <div className="heather-shadow" />
            </div>
            <div className="text-wrapper">LakesCorp</div>
          </header>
          <div className="ventana-total">
            <img
              className="alto-total"
              alt="Alto total"
              src="https://cdn.animaapp.com/projects/6512e9693906ea530ab4adce/releases/65185053fbb7a3a4593be509/img/altototal-1@2x.png"
            />
            <div className="bajo-total">
              <img
                className="bajoventana"
                alt="Bajoventana"
                src="https://cdn.animaapp.com/projects/6512e9693906ea530ab4adce/releases/65185053fbb7a3a4593be509/img/bajoventana-1@2x.png"
              />
              <p className="p">✨ Crafting the Useful, the Unique, and the Unbelievable! ✨</p>
            </div>
          </div>
        </>
      )}

      {(screenWidth >= 1442 || (screenWidth >= 834 && screenWidth < 1442)) && (
        <>
          <div className="div">
            <div className="div">
              <div className="header-2">
                <div className="logo">
                  <img
                    className="logo-2"
                    alt="Logo"
                    src="https://cdn.animaapp.com/projects/6512e9693906ea530ab4adce/releases/6516b4b15a2f0035c9312de1/img/logo-1@2x.png"
                  />
                  <div className="lakescorp-button">LakesCorp</div>
                </div>
                <div
                  className="frame"
                  style={{
                    alignItems:
                      screenWidth >= 834 && screenWidth < 1442
                        ? "flex-start"
                        : screenWidth >= 1442
                        ? "center"
                        : undefined,
                    flexDirection: screenWidth >= 834 && screenWidth < 1442 ? "column" : undefined,
                    gap: screenWidth >= 834 && screenWidth < 1442 ? "15px" : screenWidth >= 1442 ? "30px" : undefined,
                    height:
                      screenWidth >= 834 && screenWidth < 1442 ? "74px" : screenWidth >= 1442 ? "29px" : undefined,
                    justifyContent: screenWidth >= 834 && screenWidth < 1442 ? "center" : undefined,
                  }}
                >
                  {screenWidth >= 834 && screenWidth < 1442 && (
                    <>
                      <div className="frame-2">
                        <a
                          className="news-button"
                          href="https://twitter.com/LakesCorp"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <img
                            className="xcorp-svg"
                            alt="Xcorp svg"
                            src="https://cdn.animaapp.com/projects/6512e9693906ea530ab4adce/releases/6518345801a560f117d99c87/img/xcorp---svg-1@2x.png"
                          />
                          <div className="text-wrapper-2">News</div>
                        </a>
                        <a
                          className="apps-button"
                          href="https://play.google.com/store/apps/dev?id=7112554237907399984"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <img
                            className="vector"
                            alt="Vector"
                            src="https://cdn.animaapp.com/projects/6512e9693906ea530ab4adce/releases/6518345801a560f117d99c87/img/vector-4@2x.png"
                          />
                          <div className="text-wrapper-3">Apps</div>
                        </a>
                      </div>
                      <div className="frame-3">
                        <a
                          className="games-button"
                          href="https://lakescorp.itch.io/"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <img
                            className="vector-svg"
                            alt="Vector svg"
                            src="https://cdn.animaapp.com/projects/6512e9693906ea530ab4adce/releases/6516b4b15a2f0035c9312de1/img/vector---svg@2x.png"
                          />
                          <div className="text-wrapper-2">Games</div>
                        </a>
                        <a
                          className="profiles-button"
                          href="https://linktr.ee/lakescorp"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <img
                            className="profile-svg"
                            alt="Profile svg"
                            src="https://cdn.animaapp.com/projects/6512e9693906ea530ab4adce/releases/6516b4b15a2f0035c9312de1/img/profile---svg@2x.png"
                          />
                          <div className="text-wrapper-2">Profiles</div>
                        </a>
                      </div>
                    </>
                  )}

                  {screenWidth >= 1442 && (
                    <>
                      <a
                        className="news-button"
                        href="https://twitter.com/LakesCorp"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <img
                          className="xcorp-svg"
                          alt="Xcorp svg"
                          src="https://cdn.animaapp.com/projects/6512e9693906ea530ab4adce/releases/6516b4b15a2f0035c9312de1/img/xcorp---svg@2x.png"
                        />
                        <div className="text-wrapper-4">News</div>
                      </a>
                      <a
                        className="apps-button"
                        href="https://play.google.com/store/apps/dev?id=7112554237907399984"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <img
                          className="group-svg"
                          alt="Group svg"
                          src="https://cdn.animaapp.com/projects/6512e9693906ea530ab4adce/releases/6516b4b15a2f0035c9312de1/img/group---svg@2x.png"
                        />
                        <div className="text-wrapper-5">Apps</div>
                      </a>
                      <a
                        className="games-button"
                        href="https://lakescorp.itch.io/"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <img
                          className="vector-svg"
                          alt="Vector svg"
                          src="https://cdn.animaapp.com/projects/6512e9693906ea530ab4adce/releases/6516b4b15a2f0035c9312de1/img/vector---svg@2x.png"
                        />
                        <div className="text-wrapper-4">Games</div>
                      </a>
                      <a
                        className="profiles-button"
                        href="https://linktr.ee/lakescorp"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <img
                          className="profile-svg-2"
                          alt="Profile svg"
                          src="https://cdn.animaapp.com/projects/6512e9693906ea530ab4adce/releases/6516b4b15a2f0035c9312de1/img/profile---svg@2x.png"
                        />
                        <div className="text-wrapper-4">Profiles</div>
                      </a>
                    </>
                  )}
                </div>
              </div>
              <div
                className="heather-shadow-2"
                style={{
                  height: screenWidth >= 834 && screenWidth < 1442 ? "60px" : screenWidth >= 1442 ? "104px" : undefined,
                }}
              />
            </div>
            <div className="text-wrapper-6">LakesCorp</div>
          </div>
          <div
            className="ventan-wrapper"
            style={{
              alignSelf: screenWidth >= 834 && screenWidth < 1442 ? "stretch" : undefined,
              width: screenWidth >= 834 && screenWidth < 1442 ? "100%" : screenWidth >= 1442 ? "1440px" : undefined,
            }}
          >
            <div className="div-2">
              <img
                className="alto-total-2"
                alt="Alto total"
                src={
                  screenWidth >= 834 && screenWidth < 1442
                    ? "https://cdn.animaapp.com/projects/6512e9693906ea530ab4adce/releases/65181f5b059508e446b20ef8/img/altototal-1.png"
                    : screenWidth >= 1442
                    ? "https://cdn.animaapp.com/projects/6512e9693906ea530ab4adce/releases/6516b4b15a2f0035c9312de1/img/altototal.png"
                    : undefined
                }
              />
              <div className="bajo-total-2">
                <img
                  className="bajoventana-2"
                  alt="Bajoventana"
                  src={
                    screenWidth >= 834 && screenWidth < 1442
                      ? "https://cdn.animaapp.com/projects/6512e9693906ea530ab4adce/releases/65181ecefbb7a3a4593be4ea/img/bajoventana-1.png"
                      : screenWidth >= 1442
                      ? "https://cdn.animaapp.com/projects/6512e9693906ea530ab4adce/releases/6516b4b15a2f0035c9312de1/img/bajoventana.png"
                      : undefined
                  }
                />
                <p
                  className="text-wrapper-7"
                  style={{
                    fontSize:
                      screenWidth >= 834 && screenWidth < 1442 ? "24px" : screenWidth >= 1442 ? "32px" : undefined,
                    height:
                      screenWidth >= 834 && screenWidth < 1442
                        ? "calc(100.00% - 79px)"
                        : screenWidth >= 1442
                        ? "calc(100.00% - 68px)"
                        : undefined,
                    left: screenWidth >= 834 && screenWidth < 1442 ? "36px" : screenWidth >= 1442 ? "130px" : undefined,
                    top: screenWidth >= 834 && screenWidth < 1442 ? "40px" : screenWidth >= 1442 ? "34px" : undefined,
                    width:
                      screenWidth >= 834 && screenWidth < 1442
                        ? "calc(100.00% - 72px)"
                        : screenWidth >= 1442
                        ? "calc(100.00% - 259px)"
                        : undefined,
                  }}
                >
                  ✨ Crafting the Useful, the Unique, and the Unbelievable! ✨
                </p>
              </div>
            </div>
          </div>
        </>
      )}

      <div
        className="about-me"
        style={{
          height:
            screenWidth < 834
              ? "242px"
              : screenWidth >= 834 && screenWidth < 1442
              ? "521px"
              : screenWidth >= 1442
              ? "610px"
              : undefined,
          width:
            screenWidth < 834
              ? "360px"
              : screenWidth >= 834 && screenWidth < 1442
              ? "834px"
              : screenWidth >= 1442
              ? "1442px"
              : undefined,
        }}
      >
        <div
          className="overlap-group"
          style={{
            backgroundImage:
              screenWidth >= 1442 || (screenWidth >= 834 && screenWidth < 1442)
                ? "url(https://cdn.animaapp.com/projects/6512e9693906ea530ab4adce/releases/6516b4b15a2f0035c9312de1/img/frame.png)"
                : undefined,
            backgroundPosition:
              screenWidth >= 1442 || (screenWidth >= 834 && screenWidth < 1442) ? "50% 50%" : undefined,
            backgroundSize: screenWidth >= 1442 || (screenWidth >= 834 && screenWidth < 1442) ? "cover" : undefined,
            height:
              screenWidth < 834
                ? "252px"
                : screenWidth >= 834 && screenWidth < 1442
                ? "625px"
                : screenWidth >= 1442
                ? "839px"
                : undefined,
            left:
              screenWidth < 834
                ? "-42px"
                : screenWidth >= 834 && screenWidth < 1442
                ? "-27px"
                : screenWidth >= 1442
                ? "163px"
                : undefined,
            top:
              screenWidth < 834
                ? "-9px"
                : screenWidth >= 834 && screenWidth < 1442
                ? "-51px"
                : screenWidth >= 1442
                ? "-141px"
                : undefined,
            width:
              screenWidth < 834
                ? "444px"
                : screenWidth >= 834 && screenWidth < 1442
                ? "832px"
                : screenWidth >= 1442
                ? "1118px"
                : undefined,
          }}
        >
          {screenWidth < 834 && <div className="frame-4" />}

          <div
            className="frame-wrapper"
            style={{
              height:
                screenWidth < 834
                  ? "165px"
                  : screenWidth >= 834 && screenWidth < 1442
                  ? "312px"
                  : screenWidth >= 1442
                  ? "416px"
                  : undefined,
              left:
                screenWidth < 834
                  ? "90px"
                  : screenWidth >= 834 && screenWidth < 1442
                  ? "166px"
                  : screenWidth >= 1442
                  ? "227px"
                  : undefined,
              top:
                screenWidth < 834
                  ? "47px"
                  : screenWidth >= 834 && screenWidth < 1442
                  ? "155px"
                  : screenWidth >= 1442
                  ? "211px"
                  : undefined,
              width:
                screenWidth < 834
                  ? "264px"
                  : screenWidth >= 834 && screenWidth < 1442
                  ? "500px"
                  : screenWidth >= 1442
                  ? "664px"
                  : undefined,
            }}
          >
            <div
              className="frame-5"
              style={{
                alignSelf: (screenWidth >= 834 && screenWidth < 1442) || screenWidth < 834 ? "stretch" : undefined,
                flex: (screenWidth >= 834 && screenWidth < 1442) || screenWidth < 834 ? "1" : undefined,
                flexGrow: (screenWidth >= 834 && screenWidth < 1442) || screenWidth < 834 ? "1" : undefined,
                gap:
                  screenWidth < 834
                    ? "9px"
                    : screenWidth >= 1442 || (screenWidth >= 834 && screenWidth < 1442)
                    ? "25px"
                    : undefined,
                height: screenWidth >= 1442 ? "413px" : undefined,
                width: screenWidth >= 1442 ? "664px" : undefined,
              }}
            >
              <div className="div">
                <div
                  className="text-wrapper-8"
                  style={{
                    fontSize:
                      screenWidth < 834
                        ? "20px"
                        : screenWidth >= 834 && screenWidth < 1442
                        ? "32px"
                        : screenWidth >= 1442
                        ? "40px"
                        : undefined,
                  }}
                >
                  What is LakesCorp?
                </div>
              </div>
              <div
                className="div-wrapper"
                style={{
                  flex: (screenWidth >= 834 && screenWidth < 1442) || screenWidth < 834 ? "0 0 auto" : undefined,
                  height: screenWidth >= 1442 ? "289px" : undefined,
                  padding:
                    (screenWidth >= 834 && screenWidth < 1442) || screenWidth < 834
                      ? "0px 16px 0px 19px"
                      : screenWidth >= 1442
                      ? "0px 16px"
                      : undefined,
                }}
              >
                <p
                  className="text-wrapper-9"
                  style={{
                    alignSelf:
                      screenWidth >= 1442 || (screenWidth >= 834 && screenWidth < 1442) ? "stretch" : undefined,
                    fontSize:
                      screenWidth < 834
                        ? "15px"
                        : screenWidth >= 834 && screenWidth < 1442
                        ? "24px"
                        : screenWidth >= 1442
                        ? "32px"
                        : undefined,
                    marginLeft: screenWidth < 834 ? "-12.00px" : undefined,
                    marginRight: screenWidth < 834 ? "-12.00px" : undefined,
                    marginTop: (screenWidth >= 834 && screenWidth < 1442) || screenWidth < 834 ? "-1.00px" : undefined,
                    width: screenWidth < 834 ? "253px" : undefined,
                  }}
                >
                  Lakescorp is my personal project in which I aspire to fuse my passion for technology and my
                  willingness to offer different services through apps and games.I hope they are of your interest.
                </p>
              </div>
            </div>
          </div>
          {((screenWidth >= 834 && screenWidth < 1442) || screenWidth < 834) && (
            <img
              className="thinking-face"
              style={{
                height: screenWidth >= 834 && screenWidth < 1442 ? "144px" : screenWidth < 834 ? "82px" : undefined,
                left: screenWidth >= 834 && screenWidth < 1442 ? "627px" : screenWidth < 834 ? "324px" : undefined,
                top: screenWidth >= 834 && screenWidth < 1442 ? "126px" : screenWidth < 834 ? "0" : undefined,
                width: screenWidth >= 834 && screenWidth < 1442 ? "152px" : screenWidth < 834 ? "78px" : undefined,
              }}
              alt="Thinking face"
              src="https://cdn.animaapp.com/projects/6512e9693906ea530ab4adce/releases/6516b4b15a2f0035c9312de1/img/thinking-face-3d-1@2x.png"
            />
          )}

          {screenWidth >= 1442 && (
            <div className="frame-6">
              <div className="thinking-face-wrapper">
                <img
                  className="thinking-face-d"
                  alt="Thinking face"
                  src="https://cdn.animaapp.com/projects/6512e9693906ea530ab4adce/releases/6516b4b15a2f0035c9312de1/img/thinking-face-3d-1@2x.png"
                />
              </div>
            </div>
          )}
        </div>
      </div>
      {(screenWidth >= 1442 || (screenWidth >= 834 && screenWidth < 1442)) && (
        <>
          <div
            className="VSCODE"
            style={{
              flex: screenWidth >= 1442 ? "0 0 auto" : undefined,
              height: screenWidth >= 834 && screenWidth < 1442 ? "635px" : undefined,
              width: screenWidth >= 834 && screenWidth < 1442 ? "830px" : screenWidth >= 1442 ? "1076px" : undefined,
            }}
          >
            <div
              className="vscode"
              style={{
                height: screenWidth >= 834 && screenWidth < 1442 ? "322px" : screenWidth >= 1442 ? "560px" : undefined,
                padding:
                  screenWidth >= 834 && screenWidth < 1442
                    ? "65px 63px 0px 131px"
                    : screenWidth >= 1442
                    ? "122px 63px 16px 228px"
                    : undefined,
                width: screenWidth >= 834 && screenWidth < 1442 ? "568px" : screenWidth >= 1442 ? "988px" : undefined,
              }}
            >
              <p
                className="if-user-tech"
                style={{
                  alignSelf: screenWidth >= 1442 ? "stretch" : undefined,
                  flex: screenWidth >= 1442 ? "1" : undefined,
                  fontSize: screenWidth >= 834 && screenWidth < 1442 ? "9px" : screenWidth >= 1442 ? "13px" : undefined,
                  height: screenWidth >= 834 && screenWidth < 1442 ? "231px" : undefined,
                  marginRight: screenWidth >= 834 && screenWidth < 1442 ? "-36.00px" : undefined,
                  marginTop: screenWidth >= 1442 ? "-1.00px" : undefined,
                  width: screenWidth >= 834 && screenWidth < 1442 ? "410px" : undefined,
                }}
              >
                <span className="span">if</span>
                <span className="text-wrapper-10"> user == </span>
                <span className="text-wrapper-11">&#39;Tech Enthusiast&#39;</span>
                <span className="text-wrapper-10">
                  : <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                </span>
                <span className="text-wrapper-12">print</span>
                <span className="text-wrapper-10">(</span>
                <span className="text-wrapper-11">&#34;</span>
                <span className="text-wrapper-10">📂 </span>
                <span className="text-wrapper-11">GitHub Codebase: Dive into Our Projects!&#34;</span>
                <span className="text-wrapper-10">
                  ) <br />
                  <br />
                </span>
                <span className="span">class</span>
                <span className="text-wrapper-10">&nbsp;</span>
                <span className="text-wrapper-13">GitHubProjects</span>
                <span className="text-wrapper-10">
                  : <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                </span>
                <span className="span">def</span>
                <span className="text-wrapper-10">&nbsp;</span>
                <span className="text-wrapper-13">__init__</span>
                <span className="text-wrapper-10">
                  (self): <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.projects = {"{"} <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
                <span className="text-wrapper-11">&#39;SupportBot&#39;</span>
                <span className="text-wrapper-10">: </span>
                <span className="text-wrapper-11">&#39;</span>
                <span className="text-wrapper-10">🤖 </span>
                <span className="text-wrapper-11">A ticket support bot crafted in Python.&#39;</span>
                <span className="text-wrapper-10">
                  , <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
                <span className="text-wrapper-11">&#39;KaraokeApp&#39;</span>
                <span className="text-wrapper-10">: </span>
                <span className="text-wrapper-11">&#39;</span>
                <span className="text-wrapper-10">🎤 </span>
                <span className="text-wrapper-11">
                  Karaoke magic where singers hear the original track. Again, Python-powered!&#39;
                </span>
                <span className="text-wrapper-10">
                  , <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                </span>
                <span className="text-wrapper-11"> &#39;ImageLabeler&#39;</span>
                <span className="text-wrapper-10">: </span>
                <span className="text-wrapper-11">&#39;</span>
                <span className="text-wrapper-10">🖼️ </span>
                <span className="text-wrapper-11">AI-driven image labeling in real-time.&#39;</span>
                <span className="text-wrapper-10">
                  , <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
                <span className="text-wrapper-11">&#39;EscapeRoomPassword&#39;</span>
                <span className="text-wrapper-10">: </span>
                <span className="text-wrapper-11">&#39;</span>
                <span className="text-wrapper-10">🔐 </span>
                <span className="text-wrapper-11">Unity-based password introduction for an escape room challenge.</span>
                <span className="text-wrapper-10">
                  &#39; <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"} <br />
                  &nbsp;&nbsp;&nbsp;&nbsp; <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                </span>
                <span className="span">def</span>
                <span className="text-wrapper-10">&nbsp;</span>
                <span className="text-wrapper-13">showcase</span>
                <span className="text-wrapper-10">
                  (self): <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
                <span className="span">for</span>
                <span className="text-wrapper-10"> name, desc </span>
                <span className="span">in</span>
                <span className="text-wrapper-10">
                  {" "}
                  self.projects.items(): <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
                <span className="text-wrapper-12">print</span>
                <span className="text-wrapper-10">(</span>
                <span className="text-wrapper-11">
                  f&#34;{"{"}name{"}"}: {"{"}desc{"}"}&#34;
                </span>
                <span className="text-wrapper-10">
                  ) <br /> <br /># Let&#39;s see what&#39;s inside: <br />
                  repo = GitHubProjects() <br />
                  repo.showcase() <br />
                </span>
              </p>
            </div>
            <div
              className="frame-7"
              style={{
                alignSelf: screenWidth >= 1442 ? "stretch" : undefined,
                height: screenWidth >= 834 && screenWidth < 1442 ? "218px" : screenWidth >= 1442 ? "320px" : undefined,
                justifyContent: screenWidth >= 1442 ? "space-between" : undefined,
                width: screenWidth >= 834 && screenWidth < 1442 ? "694px" : screenWidth >= 1442 ? "100%" : undefined,
              }}
            >
              <div
                className="frame-8"
                style={{
                  flex: screenWidth >= 1442 ? "0 0 auto" : undefined,
                  gap: screenWidth >= 834 && screenWidth < 1442 ? "15px" : screenWidth >= 1442 ? "20px" : undefined,
                  height: screenWidth >= 834 && screenWidth < 1442 ? "218px" : undefined,
                  padding:
                    screenWidth >= 834 && screenWidth < 1442
                      ? "71px 38px 31px"
                      : screenWidth >= 1442
                      ? "71px 38px 60px"
                      : undefined,
                }}
              >
                <div
                  className="the-power-of-code-wrapper"
                  style={{
                    alignItems:
                      screenWidth >= 834 && screenWidth < 1442
                        ? "center"
                        : screenWidth >= 1442
                        ? "flex-start"
                        : undefined,
                    justifyContent: screenWidth >= 1442 ? "center" : undefined,
                  }}
                >
                  <div
                    className="the-power-of-code"
                    style={{
                      fontSize:
                        screenWidth >= 834 && screenWidth < 1442 ? "32px" : screenWidth >= 1442 ? "40px" : undefined,
                    }}
                  >
                    🧑‍💻&nbsp;&nbsp;The power of code
                  </div>
                </div>
                <div
                  className="feel-the-magic-of-wrapper"
                  style={{
                    flex: screenWidth >= 1442 ? "0 0 auto" : undefined,
                    height: screenWidth >= 834 && screenWidth < 1442 ? "63px" : undefined,
                    marginBottom: screenWidth >= 834 && screenWidth < 1442 ? "-1.00px" : undefined,
                  }}
                >
                  <p
                    className="feel-the-magic-of"
                    style={{
                      fontSize:
                        screenWidth >= 834 && screenWidth < 1442 ? "19px" : screenWidth >= 1442 ? "32px" : undefined,
                    }}
                  >
                    <span className="text-wrapper-14">
                      Feel the magic 🪄 of code by diving into our innovative projects. My{" "}
                    </span>
                    <a href="https://github.com/lakescorp/" rel="noopener noreferrer" target="_blank">
                      <span className="text-wrapper-15">GitHub</span>
                    </a>
                    <span className="text-wrapper-14">
                      {" "}
                      is a canvas, and Python (plus a sprinkle of Unity) is my paint! 🎨
                    </span>
                  </p>
                </div>
              </div>
              <div
                className="github-button-wrapper"
                style={{
                  marginBottom: screenWidth >= 834 && screenWidth < 1442 ? "-24.00px" : undefined,
                  marginTop:
                    screenWidth >= 834 && screenWidth < 1442 ? "-25px" : screenWidth >= 1442 ? "-36.36px" : undefined,
                  width: screenWidth >= 834 && screenWidth < 1442 ? "196px" : screenWidth >= 1442 ? "306px" : undefined,
                }}
              >
                <a
                  className="github-button"
                  style={{
                    flex: screenWidth >= 1442 ? "0 0 auto" : undefined,
                    gap: screenWidth >= 834 && screenWidth < 1442 ? "16px" : undefined,
                    height: screenWidth >= 834 && screenWidth < 1442 ? "49px" : undefined,
                    justifyContent:
                      screenWidth >= 834 && screenWidth < 1442
                        ? "center"
                        : screenWidth >= 1442
                        ? "space-between"
                        : undefined,
                    padding:
                      screenWidth >= 834 && screenWidth < 1442
                        ? "9px 28px"
                        : screenWidth >= 1442
                        ? "9px 14px 9px 41.39px"
                        : undefined,
                  }}
                  href="https://github.com/lakescorp/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img
                    className="vector-2"
                    style={{
                      height:
                        screenWidth >= 834 && screenWidth < 1442 ? "35px" : screenWidth >= 1442 ? "50.36px" : undefined,
                      marginBottom: screenWidth >= 834 && screenWidth < 1442 ? "-2.00px" : undefined,
                      marginTop: screenWidth >= 834 && screenWidth < 1442 ? "-2.00px" : undefined,
                      width:
                        screenWidth >= 834 && screenWidth < 1442 ? "36px" : screenWidth >= 1442 ? "51.61px" : undefined,
                    }}
                    alt="Vector"
                    src={
                      screenWidth >= 834 && screenWidth < 1442
                        ? "https://cdn.animaapp.com/projects/6512e9693906ea530ab4adce/releases/65181ecefbb7a3a4593be4ea/img/vector-4@2x.png"
                        : screenWidth >= 1442
                        ? "https://cdn.animaapp.com/projects/6512e9693906ea530ab4adce/releases/6516b4b15a2f0035c9312de1/img/vector@2x.png"
                        : undefined
                    }
                  />
                  <div
                    className="text-wrapper-16"
                    style={{
                      alignSelf: screenWidth >= 834 && screenWidth < 1442 ? "stretch" : undefined,
                      flex: screenWidth >= 834 && screenWidth < 1442 ? "1" : undefined,
                      fontSize:
                        screenWidth >= 834 && screenWidth < 1442 ? "24px" : screenWidth >= 1442 ? "36px" : undefined,
                      height: screenWidth >= 1442 ? "47px" : undefined,
                      marginTop: screenWidth >= 834 && screenWidth < 1442 ? "-1.00px" : undefined,
                      width: screenWidth >= 1442 ? "174px" : undefined,
                    }}
                  >
                    Go now!
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div
            className="gamepanel"
            style={{
              background:
                screenWidth >= 834 && screenWidth < 1442
                  ? "linear-gradient(180deg, rgba(22, 22, 22, 0) 0%, rgb(22, 22, 22) 15.49%, rgb(21.93, 21.93, 21.93) 73.23%, rgba(22, 22, 22, 0) 90.16%)"
                  : screenWidth >= 1442
                  ? "linear-gradient(180deg, rgba(22, 22, 22, 0) 0%, rgb(22, 22, 22) 22.19%, rgb(21.93, 21.93, 21.93) 56.53%, rgba(22, 22, 22, 0) 80.57%)"
                  : undefined,
            }}
          >
            <div
              className="frame-9"
              style={{
                height: screenWidth >= 834 && screenWidth < 1442 ? "328px" : screenWidth >= 1442 ? "606px" : undefined,
                width: screenWidth >= 834 && screenWidth < 1442 ? "248px" : screenWidth >= 1442 ? "457px" : undefined,
              }}
            />
            <div
              className="frame-10"
              style={{
                marginLeft:
                  screenWidth >= 834 && screenWidth < 1442 ? "-45px" : screenWidth >= 1442 ? "-90px" : undefined,
              }}
            >
              <div className="div">
                <p
                  className="text-wrapper-17"
                  style={{
                    fontSize:
                      screenWidth >= 834 && screenWidth < 1442 ? "32px" : screenWidth >= 1442 ? "40px" : undefined,
                  }}
                >
                  🎮 Game Development Journey 🕹️
                </p>
              </div>
              <div className="div">
                <p
                  className="ever-since-i-can"
                  style={{
                    fontSize:
                      screenWidth >= 834 && screenWidth < 1442 ? "19px" : screenWidth >= 1442 ? "32px" : undefined,
                  }}
                >
                  Ever since I can remember, crafting games has been a passion of mine. 🎲 While my portfolio might not
                  be vast at the moment, 🚀 I&#39;m fervently working towards adding more innovative titles in the
                  future. 💡 Join me on this exciting quest! 🛠️🌟
                </p>
              </div>
              <div
                className="itchio-button-wrapper"
                style={{
                  opacity: screenWidth >= 834 && screenWidth < 1442 ? "0.96" : undefined,
                  width:
                    screenWidth >= 834 && screenWidth < 1442 ? "196px" : screenWidth >= 1442 ? "275.61px" : undefined,
                }}
              >
                <a
                  className="itchio-button"
                  style={{
                    padding:
                      screenWidth >= 834 && screenWidth < 1442
                        ? "6px 27px"
                        : screenWidth >= 1442
                        ? "6px 34px"
                        : undefined,
                  }}
                  href="https://lakescorp.itch.io/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img
                    className="vector-3"
                    style={{
                      height:
                        screenWidth >= 834 && screenWidth < 1442
                          ? "35.99px"
                          : screenWidth >= 1442
                          ? "44.63px"
                          : undefined,
                      width:
                        screenWidth >= 834 && screenWidth < 1442 ? "40px" : screenWidth >= 1442 ? "49.61px" : undefined,
                    }}
                    alt="Vector"
                    src={
                      screenWidth >= 834 && screenWidth < 1442
                        ? "https://cdn.animaapp.com/projects/6512e9693906ea530ab4adce/releases/65183db189360d82e0195386/img/vector-6@2x.png"
                        : screenWidth >= 1442
                        ? "https://cdn.animaapp.com/projects/6512e9693906ea530ab4adce/releases/6516b9435a2f0035c9312df4/img/vector-1@2x.png"
                        : undefined
                    }
                  />
                  <div
                    className="text-wrapper-18"
                    style={{
                      alignSelf: screenWidth >= 834 && screenWidth < 1442 ? "stretch" : undefined,
                      fontSize:
                        screenWidth >= 834 && screenWidth < 1442 ? "24px" : screenWidth >= 1442 ? "36px" : undefined,
                      height: screenWidth >= 1442 ? "47px" : undefined,
                      width:
                        screenWidth >= 834 && screenWidth < 1442 ? "90px" : screenWidth >= 1442 ? "142px" : undefined,
                    }}
                  >
                    Go now!
                  </div>
                </a>
              </div>
            </div>
            <div
              className="frame-11"
              style={{
                height:
                  screenWidth >= 834 && screenWidth < 1442 ? "313.75px" : screenWidth >= 1442 ? "606px" : undefined,
                marginLeft:
                  screenWidth >= 834 && screenWidth < 1442 ? "-45px" : screenWidth >= 1442 ? "-90px" : undefined,
                width: screenWidth >= 834 && screenWidth < 1442 ? "248px" : screenWidth >= 1442 ? "479px" : undefined,
              }}
            />
          </div>
          <div
            className="apps-panel"
            style={{
              height: screenWidth >= 834 && screenWidth < 1442 ? "498px" : screenWidth >= 1442 ? "692px" : undefined,
              width: screenWidth >= 834 && screenWidth < 1442 ? "834px" : screenWidth >= 1442 ? "1440px" : undefined,
            }}
          >
            <div
              className="apps"
              style={{
                height: screenWidth >= 834 && screenWidth < 1442 ? "489px" : undefined,
                left: screenWidth >= 834 && screenWidth < 1442 ? "112px" : screenWidth >= 1442 ? "218px" : undefined,
                top: screenWidth >= 834 && screenWidth < 1442 ? "4px" : screenWidth >= 1442 ? "-48px" : undefined,
                width: screenWidth >= 834 && screenWidth < 1442 ? "722px" : screenWidth >= 1442 ? "1083px" : undefined,
              }}
            >
              <div
                className="frame-12"
                style={{
                  height: screenWidth >= 834 && screenWidth < 1442 ? "357px" : undefined,
                  marginLeft:
                    screenWidth >= 834 && screenWidth < 1442
                      ? "-24.00px"
                      : screenWidth >= 1442
                      ? "-42.50px"
                      : undefined,
                  width: screenWidth >= 834 && screenWidth < 1442 ? "510px" : screenWidth >= 1442 ? "905px" : undefined,
                }}
              >
                <div
                  className="frame-13"
                  style={{
                    flex: screenWidth >= 834 && screenWidth < 1442 ? "1" : undefined,
                    flexGrow: screenWidth >= 834 && screenWidth < 1442 ? "1" : undefined,
                    height: screenWidth >= 1442 ? "491px" : undefined,
                  }}
                >
                  {screenWidth >= 834 && screenWidth < 1442 && (
                    <div className="overlap-group-2">
                      <div className="frame-14">
                        <div className="frame-15">
                          <div className="div-2">
                            <p className="apps-from-tools-to">🚀&nbsp;&nbsp;Apps: From Tools to Thrills!</p>
                          </div>
                          <div className="dive-into-our-wrapper">
                            <p className="dive-into-our">
                              <span className="text-wrapper-19">
                                🌟 Dive into our diverse world of app development! I’am passionate about crafting
                                everything from handy utilities 🔧️ to engaging games 🎲. Whether you&#39;re in need of
                                a quirky tambourine app or a dedicated TTS for Twitch, we&#39;ve got it all! Explore and
                                see what fits your fancy. 🔍 Don&#39;t forget to check us out on the
                              </span>
                              <span className="text-wrapper-20">&nbsp;</span>
                              <a
                                href="https://play.google.com/store/apps/dev?id=7112554237907399984"
                                rel="noopener noreferrer"
                                target="_blank"
                              >
                                <span className="text-wrapper-21">Play Store</span>
                              </a>
                              <span className="text-wrapper-20">!</span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <a
                        className="play-store-button"
                        href="https://play.google.com/store/apps/dev?id=7112554237907399984"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <img
                          className="vector-4"
                          alt="Vector"
                          src="https://cdn.animaapp.com/projects/6512e9693906ea530ab4adce/releases/65183c3a1cf0d85fdd17dd2f/img/vector-7@2x.png"
                        />
                        <div className="text-wrapper-22">Go now!</div>
                      </a>
                    </div>
                  )}

                  {screenWidth >= 1442 && (
                    <>
                      <div className="frame-16">
                        <div className="frame-17">
                          <div className="div-2">
                            <p className="apps-from-tools-to-2">🚀&nbsp;&nbsp;Apps: From Tools to Thrills!</p>
                          </div>
                          <div className="dive-into-our-wrapper">
                            <p className="dive-into-our-2">
                              <span className="text-wrapper-19">
                                🌟 Dive into our diverse world of app development! I’am passionate about crafting
                                everything from handy utilities 🔧️ to engaging games 🎲. Whether you&#39;re in need of
                                a quirky tambourine app or a dedicated TTS for Twitch, we&#39;ve got it all! Explore and
                                see what fits your fancy. 🔍 Don&#39;t forget to check us out on the
                              </span>
                              <span className="text-wrapper-20">&nbsp;</span>
                              <a
                                href="https://play.google.com/store/apps/dev?id=7112554237907399984"
                                rel="noopener noreferrer"
                                target="_blank"
                              >
                                <span className="text-wrapper-21">Play Store</span>
                              </a>
                              <span className="text-wrapper-20">!</span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="frame-18">
                        <div className="play-store-button-wrapper">
                          <a
                            className="play-store-button-2"
                            href="https://play.google.com/store/apps/dev?id=7112554237907399984"
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            <img
                              className="vector-5"
                              alt="Vector"
                              src="https://cdn.animaapp.com/projects/6512e9693906ea530ab4adce/releases/6516b4b15a2f0035c9312de1/img/vector-2@2x.png"
                            />
                            <div className="text-wrapper-23">Go now!</div>
                          </a>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
              <div
                className="frame-19"
                style={{
                  height: screenWidth >= 834 && screenWidth < 1442 ? "497px" : undefined,
                  marginBottom: screenWidth >= 834 && screenWidth < 1442 ? "-4.00px" : undefined,
                  marginLeft:
                    screenWidth >= 834 && screenWidth < 1442 ? "-54px" : screenWidth >= 1442 ? "-219px" : undefined,
                  marginRight:
                    screenWidth >= 834 && screenWidth < 1442
                      ? "-24.00px"
                      : screenWidth >= 1442
                      ? "-42.50px"
                      : undefined,
                  marginTop: screenWidth >= 834 && screenWidth < 1442 ? "-4.00px" : undefined,
                  width: screenWidth >= 834 && screenWidth < 1442 ? "314px" : screenWidth >= 1442 ? "482px" : undefined,
                }}
              >
                <div
                  className="element-so-wrapper"
                  style={{
                    alignSelf: screenWidth >= 1442 ? "stretch" : undefined,
                    display:
                      screenWidth >= 834 && screenWidth < 1442
                        ? "inline-flex"
                        : screenWidth >= 1442
                        ? "flex"
                        : undefined,
                    marginBottom: screenWidth >= 834 && screenWidth < 1442 ? "-65.71px" : undefined,
                    marginLeft: screenWidth >= 834 && screenWidth < 1442 ? "-128.77px" : undefined,
                    marginTop: screenWidth >= 834 && screenWidth < 1442 ? "-65.71px" : undefined,
                    width: screenWidth >= 1442 ? "100%" : undefined,
                  }}
                >
                  <img
                    className="element-so"
                    style={{
                      alignSelf: screenWidth >= 1442 ? "stretch" : undefined,
                      height:
                        screenWidth >= 834 && screenWidth < 1442
                          ? "628.42px"
                          : screenWidth >= 1442
                          ? "788.97px"
                          : undefined,
                      marginLeft: screenWidth >= 1442 ? "-55.93px" : undefined,
                      marginRight: screenWidth >= 1442 ? "-55.93px" : undefined,
                      width:
                        screenWidth >= 834 && screenWidth < 1442
                          ? "418.77px"
                          : screenWidth >= 1442
                          ? "100%"
                          : undefined,
                    }}
                    alt="Element so"
                    src="https://cdn.animaapp.com/projects/6512e9693906ea530ab4adce/releases/6516b4b15a2f0035c9312de1/img/642shots-so-1.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="modelos">
            <div
              className="overlap-group-wrapper"
              style={{
                height: screenWidth >= 834 && screenWidth < 1442 ? "422px" : screenWidth >= 1442 ? "580px" : undefined,
                width: screenWidth >= 834 && screenWidth < 1442 ? "203px" : screenWidth >= 1442 ? "350px" : undefined,
              }}
            >
              <div
                className="overlap-group-3"
                style={{
                  height:
                    screenWidth >= 834 && screenWidth < 1442 ? "329px" : screenWidth >= 1442 ? "494px" : undefined,
                  top: screenWidth >= 834 && screenWidth < 1442 ? "24px" : screenWidth >= 1442 ? "33px" : undefined,
                  width: screenWidth >= 834 && screenWidth < 1442 ? "453px" : screenWidth >= 1442 ? "715px" : undefined,
                }}
              >
                <img
                  className="captura-de-pantalla"
                  style={{
                    height:
                      screenWidth >= 834 && screenWidth < 1442 ? "237px" : screenWidth >= 1442 ? "345px" : undefined,
                    width:
                      screenWidth >= 834 && screenWidth < 1442 ? "148px" : screenWidth >= 1442 ? "231px" : undefined,
                  }}
                  alt="Captura de pantalla"
                  src={
                    screenWidth >= 834 && screenWidth < 1442
                      ? "https://cdn.animaapp.com/projects/6512e9693906ea530ab4adce/releases/65183db189360d82e0195386/img/captura-de-pantalla-2023-09-26-232655-1-1@2x.png"
                      : screenWidth >= 1442
                      ? "https://cdn.animaapp.com/projects/6512e9693906ea530ab4adce/releases/6516b7ff059508e446b20cbd/img/captura-de-pantalla-2023-09-26-232655-1@2x.png"
                      : undefined
                  }
                />
                <img
                  className="polygon"
                  style={{
                    height:
                      screenWidth >= 834 && screenWidth < 1442 ? "222px" : screenWidth >= 1442 ? "331px" : undefined,
                    left: screenWidth >= 834 && screenWidth < 1442 ? "64px" : screenWidth >= 1442 ? "109px" : undefined,
                    top: screenWidth >= 834 && screenWidth < 1442 ? "107px" : screenWidth >= 1442 ? "163px" : undefined,
                    width:
                      screenWidth >= 834 && screenWidth < 1442 ? "389px" : screenWidth >= 1442 ? "605px" : undefined,
                  }}
                  alt="Polygon"
                  src={
                    screenWidth >= 834 && screenWidth < 1442
                      ? "https://cdn.animaapp.com/projects/6512e9693906ea530ab4adce/releases/65184a09b96aa1cc1a5828f8/img/polygon-1-2.png"
                      : screenWidth >= 1442
                      ? "https://cdn.animaapp.com/projects/6512e9693906ea530ab4adce/releases/6516b4b15a2f0035c9312de1/img/polygon-1.png"
                      : undefined
                  }
                />
              </div>
            </div>
            <div className="frame-20">
              <div className="frame-21">
                <div className="frame-22">
                  <p
                    className="text-wrapper-24"
                    style={{
                      fontSize:
                        screenWidth >= 834 && screenWidth < 1442 ? "32px" : screenWidth >= 1442 ? "40px" : undefined,
                    }}
                  >
                    🎨 Beyond Coding: My Artistic Ventures
                  </p>
                </div>
                <div className="frame-22">
                  <p
                    className="while-coding-is-my"
                    style={{
                      fontSize:
                        screenWidth >= 834 && screenWidth < 1442 ? "19px" : screenWidth >= 1442 ? "32px" : undefined,
                    }}
                  >
                    While 💻 coding is my main passion, I&#39;m also captivated by the world of digital art. Dive into
                    my collection of 🎲 voxel, 🗿 high poly, and 📏 low poly 3D models. Unveiling a different side of
                    creativity, where programming meets art! 🖌️🌌
                  </p>
                </div>
              </div>
            </div>
            <div
              className="frame-23"
              style={{
                height: screenWidth >= 834 && screenWidth < 1442 ? "233px" : screenWidth >= 1442 ? "362px" : undefined,
                width: screenWidth >= 834 && screenWidth < 1442 ? "194px" : screenWidth >= 1442 ? "350px" : undefined,
              }}
            />
          </div>
          <div
            className="social-media"
            style={{
              alignSelf: screenWidth >= 834 && screenWidth < 1442 ? "stretch" : undefined,
              flex: screenWidth >= 1442 ? "0 0 auto" : undefined,
              gap: screenWidth >= 834 && screenWidth < 1442 ? "13px" : screenWidth >= 1442 ? "33px" : undefined,
              height: screenWidth >= 834 && screenWidth < 1442 ? "195px" : undefined,
              padding:
                screenWidth >= 834 && screenWidth < 1442 ? "19px 0px" : screenWidth >= 1442 ? "39px 0px" : undefined,
              width: screenWidth >= 834 && screenWidth < 1442 ? "100%" : screenWidth >= 1442 ? "1440px" : undefined,
            }}
          >
            <p
              className="text-wrapper-25"
              style={{
                fontSize: screenWidth >= 834 && screenWidth < 1442 ? "32px" : screenWidth >= 1442 ? "40px" : undefined,
                marginTop: screenWidth >= 1442 ? "-1.00px" : undefined,
              }}
            >
              Follow me on Social Media
            </p>
            <a
              className="play-store-button-3"
              style={{
                display:
                  screenWidth >= 834 && screenWidth < 1442 ? "inline-flex" : screenWidth >= 1442 ? "flex" : undefined,
                flex: screenWidth >= 834 && screenWidth < 1442 ? "0 0 auto" : undefined,
                height: screenWidth >= 1442 ? "69px" : undefined,
                padding:
                  screenWidth >= 834 && screenWidth < 1442
                    ? "11px 31px"
                    : screenWidth >= 1442
                    ? "11px 14px 11px 43px"
                    : undefined,
                width: screenWidth >= 1442 ? "297px" : undefined,
              }}
              href="https://linktr.ee/lakescorp"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                className="vector-6"
                style={{
                  height: screenWidth >= 834 && screenWidth < 1442 ? "35px" : screenWidth >= 1442 ? "38px" : undefined,
                  marginLeft: screenWidth >= 1442 ? "-6.50px" : undefined,
                  width:
                    screenWidth >= 834 && screenWidth < 1442 ? "39.61px" : screenWidth >= 1442 ? "43px" : undefined,
                }}
                alt="Vector"
                src={
                  screenWidth >= 834 && screenWidth < 1442
                    ? "https://cdn.animaapp.com/projects/6512e9693906ea530ab4adce/releases/65183db189360d82e0195386/img/vector-8@2x.png"
                    : screenWidth >= 1442
                    ? "https://cdn.animaapp.com/projects/6512e9693906ea530ab4adce/releases/6516b4b15a2f0035c9312de1/img/vector-3@2x.png"
                    : undefined
                }
              />
              <div
                className="text-wrapper-26"
                style={{
                  fontSize:
                    screenWidth >= 834 && screenWidth < 1442 ? "24px" : screenWidth >= 1442 ? "36px" : undefined,
                  height: screenWidth >= 1442 ? "47px" : undefined,
                  marginRight: screenWidth >= 1442 ? "-6.50px" : undefined,
                  marginTop: screenWidth >= 1442 ? "-1.00px" : undefined,
                  width:
                    screenWidth >= 834 && screenWidth < 1442
                      ? "fit-content"
                      : screenWidth >= 1442
                      ? "174px"
                      : undefined,
                }}
              >
                Linktree
              </div>
            </a>
          </div>
        </>
      )}

      {screenWidth < 834 && (
        <>
          <div className="VSCODE-2">
            <div className="if-user-tech-wrapper">
              <p className="if-user-tech-2">
                <span className="span">if</span>
                <span className="text-wrapper-10"> user == </span>
                <span className="text-wrapper-11">&#39;Tech Enthusiast&#39;</span>
                <span className="text-wrapper-10">
                  : <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                </span>
                <span className="text-wrapper-12">print</span>
                <span className="text-wrapper-10">(</span>
                <span className="text-wrapper-11">&#34;</span>
                <span className="text-wrapper-10">📂 </span>
                <span className="text-wrapper-11">GitHub Codebase: Dive into Our Projects!&#34;</span>
                <span className="text-wrapper-10">
                  ) <br />
                  <br />
                </span>
                <span className="span">class</span>
                <span className="text-wrapper-10">&nbsp;</span>
                <span className="text-wrapper-13">GitHubProjects</span>
                <span className="text-wrapper-10">
                  : <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                </span>
                <span className="span">def</span>
                <span className="text-wrapper-10">&nbsp;</span>
                <span className="text-wrapper-13">__init__</span>
                <span className="text-wrapper-10">
                  (self): <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.projects = {"{"} <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
                <span className="text-wrapper-11">&#39;SupportBot&#39;</span>
                <span className="text-wrapper-10">: </span>
                <span className="text-wrapper-11">&#39;</span>
                <span className="text-wrapper-10">🤖 </span>
                <span className="text-wrapper-11">A ticket support bot crafted in Python.&#39;</span>
                <span className="text-wrapper-10">
                  , <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
                <span className="text-wrapper-11">&#39;KaraokeApp&#39;</span>
                <span className="text-wrapper-10">: </span>
                <span className="text-wrapper-11">&#39;</span>
                <span className="text-wrapper-10">🎤 </span>
                <span className="text-wrapper-11">
                  Karaoke magic where singers hear the original track. Again, Python-powered!&#39;
                </span>
                <span className="text-wrapper-10">
                  , <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                </span>
                <span className="text-wrapper-11"> &#39;ImageLabeler&#39;</span>
                <span className="text-wrapper-10">: </span>
                <span className="text-wrapper-11">&#39;</span>
                <span className="text-wrapper-10">🖼️ </span>
                <span className="text-wrapper-11">AI-driven image labeling in real-time.&#39;</span>
                <span className="text-wrapper-10">
                  , <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
                <span className="text-wrapper-11">&#39;EscapeRoomPassword&#39;</span>
                <span className="text-wrapper-10">: </span>
                <span className="text-wrapper-11">&#39;</span>
                <span className="text-wrapper-10">🔐 </span>
                <span className="text-wrapper-11">Unity-based password introduction for an escape room challenge.</span>
                <span className="text-wrapper-10">
                  &#39; <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"}"} <br />
                  &nbsp;&nbsp;&nbsp;&nbsp; <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                </span>
                <span className="span">def</span>
                <span className="text-wrapper-10">&nbsp;</span>
                <span className="text-wrapper-13">showcase</span>
                <span className="text-wrapper-10">
                  (self): <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
                <span className="span">for</span>
                <span className="text-wrapper-10"> name, desc </span>
                <span className="span">in</span>
                <span className="text-wrapper-10">
                  {" "}
                  self.projects.items(): <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </span>
                <span className="text-wrapper-12">print</span>
                <span className="text-wrapper-10">(</span>
                <span className="text-wrapper-11">
                  f&#34;{"{"}name{"}"}: {"{"}desc{"}"}&#34;
                </span>
                <span className="text-wrapper-10">
                  ) <br /> <br /># Let&#39;s see what&#39;s inside: <br />
                  repo = GitHubProjects() <br />
                  repo.showcase() <br />
                </span>
              </p>
            </div>
            <div className="frame-24">
              <div className="frame-25">
                <div className="div">
                  <div className="text-wrapper-27">🧑‍💻&nbsp;&nbsp;The power of code</div>
                </div>
                <div className="frame-26">
                  <p className="feel-the-magic-of-2">
                    <span className="text-wrapper-14">
                      Feel the magic 🪄 of code by diving into our innovative projects. My{" "}
                    </span>
                    <a href="https://github.com/lakescorp/" rel="noopener noreferrer" target="_blank">
                      <span className="text-wrapper-15">GitHub</span>
                    </a>
                    <span className="text-wrapper-14">
                      {" "}
                      is a canvas, and Python (plus a sprinkle of Unity) is my paint! 🎨
                    </span>
                  </p>
                </div>
              </div>
              <div className="frame-27">
                <a
                  className="github-button-2"
                  href="https://github.com/lakescorp/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img
                    className="vector-7"
                    alt="Vector"
                    src="https://cdn.animaapp.com/projects/6512e9693906ea530ab4adce/releases/65181ecefbb7a3a4593be4ea/img/vector-4@2x.png"
                  />
                  <div className="text-wrapper-28">Go now!</div>
                </a>
              </div>
            </div>
          </div>
          <div className="gamepanel-2">
            <div className="frame-28" />
            <div className="frame-29">
              <div className="frame-30">
                <p className="text-wrapper-27">🎮 Game Development Journey 🕹️</p>
              </div>
              <div className="div">
                <p className="text-wrapper-29">
                  Ever since I can remember, crafting games has been a passion of mine. 🎲 While my portfolio might not
                  be vast at the moment, 🚀 I&#39;m fervently working towards adding more innovative titles in the
                  future. 💡 Join me on this exciting quest! 🛠️🌟
                </p>
              </div>
              <div className="frame-31">
                <a
                  className="itchio-button-2"
                  href="https://lakescorp.itch.io/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img
                    className="vector-8"
                    alt="Vector"
                    src="https://cdn.animaapp.com/projects/6512e9693906ea530ab4adce/releases/65185053fbb7a3a4593be509/img/vector-5@2x.png"
                  />
                  <div className="text-wrapper-30">Go now!</div>
                </a>
              </div>
            </div>
            <div className="frame-32" />
          </div>
          <div className="apps-wrapper">
            <div className="apps-2">
              <div className="frame-33">
                <div className="frame-34">
                  <div className="frame-35">
                    <div className="frame-36">
                      <div className="div-2">
                        <p className="text-wrapper-27">🚀&nbsp;&nbsp;Apps: From Tools to Thrills!</p>
                      </div>
                      <div className="dive-into-our-wrapper">
                        <p className="dive-into-our-3">
                          🌟 Dive into our diverse world of app development! I’am passionate about crafting everything
                          from handy utilities 🔧️ to engaging games 🎲. Whether you&#39;re in need of a quirky
                          tambourine app or a dedicated TTS for Twitch, we&#39;ve got it all! Explore and see what fits
                          your fancy. 🔍
                        </p>
                      </div>
                    </div>
                  </div>
                  <a
                    className="play-store-button-4"
                    href="https://play.google.com/store/apps/dev?id=7112554237907399984"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <img
                      className="vector-4"
                      alt="Vector"
                      src="https://cdn.animaapp.com/projects/6512e9693906ea530ab4adce/releases/65183c3a1cf0d85fdd17dd2f/img/vector-7@2x.png"
                    />
                    <div className="text-wrapper-22">Go now!</div>
                  </a>
                </div>
              </div>
              <div className="element-shots-so-wrapper">
                <img
                  className="element-shots-so"
                  alt="Element so"
                  src="https://cdn.animaapp.com/projects/6512e9693906ea530ab4adce/releases/6518577213532d4d0a487d0a/img/642shots-so-1-1@2x.png"
                />
              </div>
            </div>
          </div>
          <div className="modelos-d">
            <div className="frame-37">
              <div className="overlap-group-4">
                <img
                  className="captura-de-pantalla-2"
                  alt="Captura de pantalla"
                  src="https://cdn.animaapp.com/projects/6512e9693906ea530ab4adce/releases/651853d77403c38b35ebae28/img/captura-de-pantalla-2023-09-26-232655-1-1@2x.png"
                />
                <img
                  className="polygon-2"
                  alt="Polygon"
                  src="https://cdn.animaapp.com/projects/6512e9693906ea530ab4adce/releases/651853d77403c38b35ebae28/img/polygon-1-1@2x.png"
                />
              </div>
            </div>
            <div className="frame-38">
              <div className="frame-21">
                <div className="frame-22">
                  <p className="text-wrapper-27">🎨 Beyond Coding: My Artistic Ventures</p>
                </div>
                <div className="frame-22">
                  <p className="text-wrapper-29">
                    While 💻 coding is my main passion, I&#39;m also captivated by the world of digital art. Dive into
                    my collection of 🎲 voxel, 🗿 high poly, and 📏 low poly 3D models. Unveiling a different side of
                    creativity, where programming meets art! 🖌️🌌
                  </p>
                </div>
              </div>
            </div>
            <div className="frame-39" />
          </div>
          <div className="social-media-2">
            <p className="text-wrapper-31">Follow me on Social Media</p>
            <a
              className="play-store-button-5"
              href="https://linktr.ee/lakescorp"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                className="vector-9"
                alt="Vector"
                src="https://cdn.animaapp.com/projects/6512e9693906ea530ab4adce/releases/65183db189360d82e0195386/img/vector-8@2x.png"
              />
              <div className="text-wrapper-32">Linktree</div>
            </a>
          </div>
        </>
      )}
    </div>
  );
};
