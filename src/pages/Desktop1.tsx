import { FunctionComponent } from "react";
import { TextField } from "@mui/material";
import styles from "./Desktop1.module.css";
const Desktop1: FunctionComponent = () => {
  return (
    <div className={styles.desktop1}>
      <img className={styles.desktop1Child} alt="" src="/rectangle-14@2x.png" />
      <div className={styles.desktop1Item} />
      <b className={styles.signUp}>Sign Up</b>
      <div className={styles.desktop1Inner} />
      <b className={styles.help}>Help</b>
      <div className={styles.groupDiv}>
        <div className={styles.groupChild} />
      </div>
      <div className={styles.havingTroubleIn}>Having trouble in sign in?</div>
      <div className={styles.userLoginWrapper}>
        <b className={styles.userLogin}>User Login</b>
      </div>
      <div className={styles.enterTheDetails}>
        Enter the details to sign in to your account
      </div>
      <TextField
        className={styles.frameTextfield}
        sx={{ width: 415 }}
        color="primary"
        variant="filled"
        type="email"
        label="Email"
        placeholder="Placeholder"
        size="medium"
        margin="none"
      />
      <div className={styles.enterEmailphoneno}>Enter Email/Phone.no</div>
      <input
        className={styles.rectangleInput}
        type="password"
        placeholder="Password"
      />
      <div className={styles.password}>Password</div>
      <button className={styles.frameButton}>
        <div className={styles.frameChild} />
      </button>
      <div className={styles.signIn}>Sign In</div>
      <div className={styles.orSignIn}>{`Or sign In with `}</div>
      <div className={styles.lineDiv} />
      <div className={styles.desktop1Child1} />
      <button className={styles.desktop1Inner1} autoFocus>
        <div className={styles.frameItem} />
      </button>
      <img className={styles.rectangleIcon} alt="" src="/rectangle-10@2x.png" />
      <div className={styles.rectangleDiv} />
      <div className={styles.google}>Google</div>
      <img
        className={styles.desktop1Child2}
        alt=""
        src="/rectangle-13@2x.png"
      />
      <img
        className={styles.desktop1Child3}
        alt=""
        src="/rectangle-15@2x.png"
      />
      <img
        className={styles.desktop1Child4}
        alt=""
        src="/rectangle-16@2x.png"
      />
      <input
        className={styles.desktop1Child5}
        type="password"
        placeholder="Confirm Password"
      />
      <div className={styles.confirmPassword}>Confirm Password</div>
      <img
        className={styles.desktop1Child6}
        alt=""
        src="/rectangle-16@2x.png"
      />
      <img className={styles.desktop1Child7} alt="" src="/rectangle-8@2x.png" />
    </div>
  );
};

export default Desktop1;
