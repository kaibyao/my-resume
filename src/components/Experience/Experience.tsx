import dayjs from "dayjs";
import "./Experience.css";

export interface Props {
  endDate: string;
  html: string;
  organization: string;
  startDate: string;
  title: string;
}

const EXPERIENCE_DATE_FORMAT = "MMM YYYY";

export const Experience: React.FC<Props> = ({
  endDate,
  html,
  organization,
  startDate,
  title,
}) => {
  const startDateStr = dayjs(startDate)
    .add(12, "hour")
    .format(EXPERIENCE_DATE_FORMAT);
  const endDateStr = endDate
    ? dayjs(endDate).add(12, "hour").format(EXPERIENCE_DATE_FORMAT)
    : "Present";

  return (
    <article className="experience">
      <div className="header">
        <h3 className="title">
          {title} — {organization}
        </h3>

        <h3 className="dates">
          {startDateStr} – {endDateStr}
        </h3>
      </div>

      <div
        className="work-details"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </article>
  );
};
