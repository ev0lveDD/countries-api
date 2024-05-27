
import classes from "./description-line.module.css";

export default function DescriptionLine({descriptionText, descriptionValue}) {
  return (
    <div className={classes.descriptionTextWrapper}>
      <p className={classes.descriptionTextHead}>{descriptionText}</p>
      <p className={classes.descriptionTextValue}> {descriptionValue}</p>
    </div>
  )
}
