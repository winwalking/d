import React from "react";

// ✅ 이미지 및 항목 인터페이스 정의
interface ImageProps {
  srcSet: {
    mobile: string;
    tablet: string;
    desktop: string;
    large: string;
  };
  alt: string;
}

interface ListItemProps {
  icon: any;
  text: string;
}

// ✅ 이미지 컴포넌트
const ResponsiveImage: React.FC<ImageProps> = ({ srcSet, alt }) => (
  <picture>
    <source media="(max-width: 412px)" srcSet={srcSet.mobile} />
    <source
      media="(min-width: 413px) and (max-width: 639px)"
      srcSet={srcSet.tablet}
    />
    <source
      media="(min-width: 640px) and (max-width: 1023px)"
      srcSet={srcSet.desktop}
    />
    <source media="(min-width: 1024px)" srcSet={srcSet.large} />
    <img
      src={srcSet.large}
      alt={alt}
      width="641"
      height="600"
      draggable="false"
    />
  </picture>
);

// ✅ 리스트 아이템 컴포넌트
const ListItem: React.FC<ListItemProps> = ({ icon, text }) => (
  <li>
    <p>
      <span className="decorative-text">
        {icon}
        <span>{text}</span>
      </span>
    </p>
  </li>
);

// ✅ 주 컴포넌트
const HasImgCtx: React.FC = () => {
  const imageProps: ImageProps = {
    srcSet: {
      mobile:
        "https://images.ctfassets.net/ss5kfr270og3/2YIhdtmj2Hk6GY9UrDxXQm/6f853d8d79e2fa63d0f52c73ca300e4a/Meet_customers_where_they_re_at_regardless_of_where_they_bank.png?fm=webp&q=60&w=772",
      tablet:
        "https://images.ctfassets.net/ss5kfr270og3/2YIhdtmj2Hk6GY9UrDxXQm/6f853d8d79e2fa63d0f52c73ca300e4a/Meet_customers_where_they_re_at_regardless_of_where_they_bank.png?fm=webp&q=60&w=1226",
      desktop:
        "https://images.ctfassets.net/ss5kfr270og3/2YIhdtmj2Hk6GY9UrDxXQm/6f853d8d79e2fa63d0f52c73ca300e4a/Meet_customers_where_they_re_at_regardless_of_where_they_bank.png?fm=webp&q=60&w=856",
      large:
        "https://images.ctfassets.net/ss5kfr270og3/2YIhdtmj2Hk6GY9UrDxXQm/6f853d8d79e2fa63d0f52c73ca300e4a/Meet_customers_where_they_re_at_regardless_of_where_they_bank.png?fm=webp&q=60&w=1282",
    },
    alt: "A joyful woman with curly hair holding a yellow phone, flanked by digital panels displaying her financial details.",
  };

  const listItems: ListItemProps[] = [
    {
      icon: (
        <svg
          aria-hidden="false"
          role="img"
          aria-label="progress"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_1_427)">
            <path
              d="M14.25 8C14.25 4.54822 11.4517 1.75 7.99996 1.75C7.58159 1.75 7.17354 1.791 6.77938 1.86898L6.48828 0.397497C6.9778 0.300655 7.48334 0.25 7.99996 0.25C12.2802 0.25 15.75 3.71979 15.75 8C15.75 12.2802 12.2802 15.75 7.99996 15.75C7.48334 15.75 6.9778 15.6993 6.48828 15.6025L6.77938 14.131C7.17355 14.209 7.58159 14.25 7.99996 14.25C11.4517 14.25 14.25 11.4518 14.25 8Z"
              fill="currentColor"
            ></path>
            <path
              d="M3.69341 14.4442C2.84859 13.8786 2.12138 13.1514 1.55578 12.3066L2.80223 11.4721C3.25875 12.154 3.846 12.7412 4.52789 13.1977L3.69341 14.4442Z"
              fill="currentColor"
            ></path>
            <path
              d="M1.55578 3.69345C2.12138 2.84863 2.84859 2.12141 3.69341 1.55582L4.52789 2.80227C3.846 3.25879 3.25875 3.84604 2.80223 4.52793L1.55578 3.69345Z"
              fill="currentColor"
            ></path>
            <path
              d="M0.39746 9.51169C0.203776 8.53265 0.203776 7.46736 0.39746 6.48832L1.86894 6.77942C1.71299 7.56775 1.71299 8.43225 1.86894 9.22058L0.39746 9.51169Z"
              fill="currentColor"
            ></path>
            <path
              d="M6.99997 11.0605L11.5606 6.49988L10.5 5.43922L6.99997 8.93921L5.49997 7.43921L4.43931 8.49987L6.99997 11.0605Z"
              fill="currentColor"
            ></path>
          </g>
          <defs>
            <clipPath id="clip0_1_427">
              <rect
                width="16"
                height="16"
                fill="white"
                transform="matrix(0 1 -1 0 16 0)"
              ></rect>
            </clipPath>
          </defs>
        </svg>
      ),
      text: "Verify 16,000+ ID types from 200 countries and territories",
    },
    {
      icon: (
        <svg
          aria-hidden="false"
          role="img"
          aria-label="item management"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.5304 7.03026L7.50006 11.0606L4.96973 8.53026L6.03039 7.4696L7.50006 8.93927L10.4697 5.9696L11.5304 7.03026Z"
            fill="currentColor"
          ></path>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.98936 1.25C5.10518 0.67944 5.60962 0.25 6.21436 0.25H9.71436C10.3191 0.25 10.8235 0.67944 10.9394 1.25H13C13.6904 1.25 14.25 1.80964 14.25 2.5V13.5C14.25 14.1904 13.6904 14.75 13 14.75H3C2.30964 14.75 1.75 14.1904 1.75 13.5V2.5C1.75 1.80964 2.30964 1.25 3 1.25H4.98936ZM4.96436 2.75H3.25V13.25H12.75V2.75H10.9644V3C10.9644 3.69036 10.4047 4.25 9.71436 4.25H6.21436C5.524 4.25 4.96436 3.69036 4.96436 3V2.75ZM6.46436 1.75V2.75H9.46436V1.75H6.46436Z"
            fill="currentColor"
          ></path>
        </svg>
      ),
      text: "Verify income for almost 100% of the US workforce",
    },
    {
      icon: (
        <svg
          aria-hidden="false"
          role="img"
          aria-label="calendar"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.5 7.5C5.05228 7.5 5.5 7.05228 5.5 6.5C5.5 5.94772 5.05228 5.5 4.5 5.5C3.94772 5.5 3.5 5.94772 3.5 6.5C3.5 7.05228 3.94772 7.5 4.5 7.5Z"
            fill="currentColor"
          ></path>
          <path
            d="M5.5 10C5.5 10.5523 5.05228 11 4.5 11C3.94772 11 3.5 10.5523 3.5 10C3.5 9.44771 3.94772 9 4.5 9C5.05228 9 5.5 9.44771 5.5 10Z"
            fill="currentColor"
          ></path>
          <path
            d="M8 7.5C8.55228 7.5 9 7.05228 9 6.5C9 5.94772 8.55228 5.5 8 5.5C7.44772 5.5 7 5.94772 7 6.5C7 7.05228 7.44772 7.5 8 7.5Z"
            fill="currentColor"
          ></path>
          <path
            d="M9 10C9 10.5523 8.55228 11 8 11C7.44772 11 7 10.5523 7 10C7 9.44771 7.44772 9 8 9C8.55228 9 9 9.44771 9 10Z"
            fill="currentColor"
          ></path>
          <path
            d="M11.5 7.5C12.0523 7.5 12.5 7.05228 12.5 6.5C12.5 5.94772 12.0523 5.5 11.5 5.5C10.9477 5.5 10.5 5.94772 10.5 6.5C10.5 7.05228 10.9477 7.5 11.5 7.5Z"
            fill="currentColor"
          ></path>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.25 1.75H14.5625C15.1944 1.75 15.75 2.2517 15.75 2.92308V13.0769C15.75 13.7483 15.1944 14.25 14.5625 14.25H1.4375C0.805559 14.25 0.25 13.7483 0.25 13.0769V2.92308C0.25 2.2517 0.805559 1.75 1.4375 1.75H3.75V0.5H5.25V1.75H10.75V0.5H12.25V1.75ZM3.75 3.25V4H5.25V3.25H10.75V4H12.25V3.25H14.25V12.75H1.75V3.25H3.75Z"
            fill="currentColor"
          ></path>
        </svg>
      ),
      text: "Provide 100% account coverage for same day and standard ACH",
    },
    {
      icon: (
        <svg
          aria-hidden="false"
          role="img"
          aria-label="income"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.5 6.5C10.5 7.05228 10.0523 7.5 9.5 7.5C8.94771 7.5 8.5 7.05228 8.5 6.5C8.5 5.94771 8.94771 5.5 9.5 5.5C10.0523 5.5 10.5 5.94771 10.5 6.5Z"
            fill="currentColor"
          ></path>
          <path d="M11.75 4.5H13.25V8.5H11.75V4.5Z" fill="currentColor"></path>
          <path d="M7.25 8.5V4.5L5.75 4.5V8.5H7.25Z" fill="currentColor"></path>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3.25 1.75H15.75V11.25H3.25V1.75ZM4.75 3.25V9.75H14.25V3.25H4.75Z"
            fill="currentColor"
          ></path>
          <path
            d="M1.75 12.75V5.5H0.25V14.25H13V12.75H1.75Z"
            fill="currentColor"
          ></path>
        </svg>
      ),
      text: "Enable instant payouts for 65% of US consumer accounts",
    },
  ];

  return (
    <div className="has_img_contents_wrapper styles_section">
      <div className="has_img_contents">
        <ResponsiveImage {...imageProps} />
        <div>
          <h3
            style={{
              fontSize: "2.8rem",
              marginBottom: "0.8rem",
              fontWeight: 600,
              lineHeight: "120%",
              letterSpacing:"-0.2rem"
            }}
          >
            Meet customers where they are
           regardless of where they bank
          </h3>
          <p style={{lineHeight:"150%",fontWeight:400,color:"#111", marginBottom:"4.5rem"}}>
            With more data connections and the ability to verify depository
            accounts
            from any US bank, Plaid makes it easier to reach more
            customers than ever.
          </p>
          <ul>
            {listItems.map((item, index) => (
              <ListItem key={index} {...item} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HasImgCtx;
