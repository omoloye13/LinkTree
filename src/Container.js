import profilePics from "./images/profile__img.png";
import icon from "./images/forward.png";
import icon_SM from "./images/forward_sm.png";
import slackIcon from "./images/slack_icon.svg";
import gitIcon from "./images/github_icon.png";
import zuriLogo from "./images/zuri_logo.svg";
import ingLogo from "./images/ing_logo.svg";
import {
  BookButton,
  DesignButton,
  PitchButton,
  PythonButton,
  TwitterButton,
  ZuriButton,
} from "./Component/Button";
const Container = () => {
  return (
    <main>
      <section>
        <div className="container">
          <div className="bubble">
            <img src={profilePics} alt="myDP" id="profile__img" />
            <img src={icon} alt="Progress_Icon" className="forward_md" />
            <img
              src={icon_SM}
              alt="Progress_Icon_mobile"
              className="forward_sm"
            />
          </div>
          <div id="twitter" className="tweet">
            Adunlomooye
          </div>
          <div id="slack" className="slak">
            Fauziyat Folashade Omoloye
          </div>
          <div className="all_links">
            <TwitterButton />
            <ZuriButton />
            <BookButton />
            <PythonButton />
            <PitchButton />
            <DesignButton />
          </div>
          <div className="socials">
            <img src={slackIcon} alt="slack_logo" />
            <img src={gitIcon} alt="gitHub_logo" />
          </div>
          <hr className="line" />
          <footer>
            <div className="footer">
              <img src={zuriLogo} alt="Zuri_logo" />
              <div className="text">HNG Internship 9 Frontend Task</div>
              <img src={ingLogo} alt="Ing_logo" />
            </div>
          </footer>
        </div>
      </section>
    </main>
  );
};
export default Container;
