import instagram from "../../../assets/instagram.png";
import facebook from "../../../assets/facebook.png";
import twitter from "../../../assets/twitter.png";
import styles from "./SocialProfiles.module.css";

const SocialProfilesBar = () => {
  const profiles = [
    {
      url: "instagram",
      icon: instagram,
    },
    {
      url: "facebook",
      icon: facebook,
    },
    {
      url: "twitter",
      icon: twitter,
    },
  ];
  return (
    <div className={styles.container}>
      {profiles.map((i, index) => {
        return (
          <div className={styles.socialIcon} key={index}>
            <img src={i.icon} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default SocialProfilesBar;
