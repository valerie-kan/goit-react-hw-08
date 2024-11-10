import css from "./HomePage.module.css";

export const HomePage = () => {
  return (
    <div className={css.mainCont}>
      <p className={css.homeText}>
        Hi there!😌 Welcome to the personal contacts website. Here you can keep
        your contacts save, add new ones and delete ones you don't need anymore.
        To use all the priveleges just join the comunity and we hope you will
        enjoy it 💁‍♀️
      </p>
    </div>
  );
};
