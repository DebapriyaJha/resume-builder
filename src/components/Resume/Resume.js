import React from "react";
import {
  AtSign,
  Calendar,
  GitHub,
  Linkedin,
  MapPin,
  Paperclip,
  Phone,
} from "react-feather";

import styles from "./Resume.module.css";

const Resume = React.forwardRef(({ sections, information, activeColor, contactInfo }, ref) => {
  const info = {
    workExp: information[sections.workExp],
    project: information[sections.project],
    achievement: information[sections.achievement],
    education: information[sections.education],
    basicInfo: information[sections.basicInfo],
    skillsSummary: information[sections.skillsSummary],
    other: information[sections.other],
  };

  const getFormattedDate = (value) => {
    if (!value) return "";
    const date = new Date(value);

    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  const sectionDiv = {
    [sections.education]: (
      <div className={`${styles.section} ${styles.education} ${info.education?.sectionTitle ? '' : styles.hidden}`}>
  <div className={styles.sectionTitle}>{info.education?.sectionTitle}</div>
  <div className={styles.content}>
    {info.education?.details?.map((item) => (
      <div className={styles.item}>
        <div className={styles['education-header']}>
          <div className={styles['education-title']}>
            {item.college ? (
              <p className={styles.subTitle}>{item.college}</p>
            ) : (
              <span />
            )}
            {item.title ? (
              <p className={styles.title}>{item.title}</p>
            ) : (
              <span />
            )}
          </div>
          {item.startDate && item.endDate ? (
            <div className={styles['education-dates']}>
              {getFormattedDate(item.startDate)} - {getFormattedDate(item.endDate)}
            </div>
          ) : (
            ''
          )}
        </div>
        {item.courses ? (
          <p className={styles.courses}>{item.courses}</p>
        ) : (
          <span />
        )}
      </div>
    ))}
  </div>
</div>
    ),
    [sections.skillsSummary]: (
      <div
        key={"skillsSummary"}
        className={`${styles.section} ${
          info.skillsSummary?.sectionTitle ? "" : styles.hidden
        }`}
      >
        <div className={styles.sectionTitle}>{info.skillsSummary.sectionTitle}</div>
        <div className={styles.content}>
          <p className={styles.overview}>
            <b>Languages: </b> {info.skillsSummary.languages}
          </p>
          <p className={styles.overview}>
            <b>Frameworks: </b> {info.skillsSummary.frameworks}
          </p>
          <p className={styles.overview}>
            <b>Platforms: </b> {info.skillsSummary.platforms}
          </p>
          <p className={styles.overview}>
            <b>Tools: </b> {info.skillsSummary.tools}
          </p>
          <p className={styles.overview}>
            <b>Soft Skills: </b> {info.skillsSummary.softSkills}
          </p>
        </div>
      </div>
    ),
    [sections.workExp]: (
      <div
        key={"workexp"}
        className={`${styles.section} ${
          info.workExp?.sectionTitle ? "" : styles.hidden
        }`}
      >
        <div className={styles.sectionTitle}>{info.workExp.sectionTitle}</div>
        <div className={styles.content}>
  {info.workExp?.details?.map((item) => (
    <div className={styles.item} key={item.title}>
      <div className={styles['item-header']}>
        <div className={styles['item-title']}>
          {item.companyName ? (
            <p className={styles.subTitle}>{item.companyName}</p>
          ) : (
            <span />
          )}
          {item.title ? (
            <p className={styles.title}>{item.title}</p>
          ) : (
            <span />
          )}
        </div>
        <div className={styles['location-dates']}>
          {item.location ? (
            <div className={styles.location}>
              <MapPin /> {item.location}
            </div>
          ) : (
            <span />
          )}
          {item.startDate && item.endDate ? (
            <div className={styles.dates}>
              ({getFormattedDate(item.startDate)} - {getFormattedDate(item.endDate)})
            </div>
          ) : (
            <span />
          )}
        </div>
      </div>
      {item.certificationLink ? (
        <a className={styles.link} href={item.certificationLink}>
          <Paperclip />
          {item.certificationLink}
        </a>
      ) : (
        <span />
      )}
              {item.points?.length > 0 ? (
                <ul className={styles.points}>
                  {item.points?.map((elem, index) => (
                    <li className={styles.point} key={elem + index}>
                      {elem}
                    </li>
                  ))}
                </ul>
              ) : (
                <span />
              )}
            </div>
          ))}
        </div>
      </div>
    ),
    [sections.project]: (
      <div
        key={"project"}
        className={`${styles.section} ${
          info.project?.sectionTitle ? "" : styles.hidden
        }`}
      >
        <div className={styles.sectionTitle}>{info.project.sectionTitle}</div>
        <div className={styles.content}>
        {info.project?.details?.map((item) => (
  <div className={styles.item}>
    <div className={styles['project-header']}>
      {item.title ? (
        <p className={styles.title}>{item.title}</p>
      ) : (
        <span />
      )}
      {item.link ? (
        <a className={styles.link} href={item.link}>
          <Paperclip />
          {item.link}
        </a>
      ) : (
        <span />
      )}
    </div>
    <div className={styles['project-links']}>
      {item.overview ? (
        <p className={styles.overview}>{item.overview}</p>
      ) : (
        <span />
      )}
      {item.github ? (
        <a className={styles.link} href={item.github}>
          <GitHub />
          {item.github}
        </a>
      ) : (
        <span />
      )}
    </div>
    {item.points?.length > 0 ? (
      <ul className={styles.points}>
        {item.points?.map((elem, index) => (
          <li className={styles.point} key={elem + index}>
            {elem}
          </li>
        ))}
      </ul>
    ) : (
      <span />
    )}
  </div>
))}
        </div>
      </div>
    ),
    
    [sections.achievement]: (
      <div
        key={"achievement"}
        className={`${styles.section} ${
          info.achievement?.sectionTitle ? "" : styles.hidden
        }`}
      >
        <div className={styles.sectionTitle}>
          {info.achievement?.sectionTitle}
        </div>
        <div className={styles.content}>
          {info.achievement?.points?.length > 0 ? (
            <ul className={styles.numbered}>
              {info.achievement?.points?.map((elem, index) => (
                <li className={styles.point} key={elem + index}>
                  {elem}
                </li>
              ))}
            </ul>
          ) : (
            <span />
          )}
        </div>
      </div>
    ),
    [sections.other]: (
      <div
        key={"other"}
        className={`${styles.section} ${
          info.other?.sectionTitle ? "" : styles.hidden
        }`}
      >
        <div className={styles.sectionTitle}>{info.other?.sectionTitle}</div>
        <div className={styles.content}>
          <p className={styles.overview}>{info?.other?.detail}</p>
        </div>
      </div>
    ),
  };

  return (
    <div ref={ref}>
      <div className={styles.container}>
        <div className={styles.header}>
        <div className={styles['name-title']}>
          <p className={styles.heading}>{info.basicInfo?.detail?.name}</p>
          <p className={styles.subHeading}>{info.basicInfo?.detail?.title}</p>
        </div>
          <div className={styles.links}>
            {info.basicInfo?.detail?.email ? (
              <a className={styles.link} type="email">
                <AtSign /> {info.basicInfo?.detail?.email}
              </a>
            ) : (
              <span />
            )}
            {info.basicInfo?.detail?.phone ? (
              <a className={styles.link}>
                <Phone /> {info.basicInfo?.detail?.phone}
              </a>
            ) : (
              <span />
            )}
            {info.basicInfo?.detail?.linkedin ? (
              <a className={styles.link}>
                <Linkedin /> {info.basicInfo?.detail?.linkedin}
              </a>
            ) : (
              <span />
            )}
            {info.basicInfo?.detail?.github ? (
              <a className={styles.link}>
                <GitHub /> {info.basicInfo?.detail?.github}
              </a>
            ) : (
              <span />
            )}
          </div>
        </div>

        <div className={styles.main}>
  {Object.keys(sectionDiv).map((key) => {
    if (key === sections.education) {
      return sectionDiv[key];
    }
    return null;
  })}
  {Object.keys(sectionDiv).map((key) => {
    if (key !== sections.education) {
      return sectionDiv[key];
    }
    return null;
  })}
</div>

        <div className={styles.contactSection}>
          {contactInfo} {/* Displaying the ContactMe component */}
        </div>
      </div>
    </div>
  );
});

export default Resume;
