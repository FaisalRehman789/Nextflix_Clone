/** @format */

// Footer component definitions
const Footer = ({ children, ...restProps }) => {
  return (
    <div className="bg-black w-full">
      <div
        className="flex flex-col max-w-5xl gap-2 px-10 py-10 mx-auto sm:px-8"
        {...restProps}
      >
        {children}
      </div>
    </div>
  );
};

Footer.displayName = "Footer";

Footer.Row = ({ children, ...restProps }) => {
  return (
    <div
      className="grid grid-cols-[repeat(auto-fill,_minmax(210px,_1fr))] gap-20 sm:grid-cols-[repeat(auto-fill,_minmax(150px,_1fr))]"
      {...restProps}
    >
      {children}
    </div>
  );
};

Footer.Row.displayName = "Footer.Row";

Footer.Column = ({ children, ...restProps }) => {
  return (
    <div className="flex flex-col text-left gap-3" {...restProps}>
      {children}
    </div>
  );
};

Footer.Column.displayName = "Footer.Column";

Footer.Link = ({ children, ...restProps }) => {
  return (
    <a className="mb-2 text-sm text-[#757575] no-underline" {...restProps}>
      {children}
    </a>
  );
};

Footer.Link.displayName = "Footer.Link";

Footer.Title = ({ children, ...restProps }) => {
  return (
    <p className="mb-9 text-lg text-[#757575]" {...restProps}>
      {children}
    </p>
  );
};

Footer.Title.displayName = "Footer.Title";

Footer.Text = ({ children, ...restProps }) => {
  return (
    <p className="mb-10 mt-12 text-lg text-[#757575]" {...restProps}>
      {children}
    </p>
  );
};

Footer.Text.displayName = "Footer.Text";

Footer.Break = ({ ...restProps }) => {
  return <p className="flex-basis-full h-0" {...restProps} />;
};

Footer.Break.displayName = "Footer.Break";

// FooterContainer component
const FooterContainer = () => {
  return (
    <Footer>
      <Footer.Title>Questions? Contact Us.</Footer.Title>
      <Footer.Break />
      <Footer.Row>
        <Footer.Column>
          <Footer.Link href="#">FAQ</Footer.Link>
          <Footer.Link href="#">Investor Relations</Footer.Link>
          <Footer.Link href="#">Ways to Watch</Footer.Link>
          <Footer.Link href="#">Corporate Information</Footer.Link>
          <Footer.Link href="#">Netflix Originals</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="#">Help Center</Footer.Link>
          <Footer.Link href="#">Jobs</Footer.Link>
          <Footer.Link href="#">Terms of Use</Footer.Link>
          <Footer.Link href="#">Contact Us</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="#">Account</Footer.Link>
          <Footer.Link href="#">Redeem Gift Cards</Footer.Link>
          <Footer.Link href="#">Privacy</Footer.Link>
          <Footer.Link href="#">Speed Test</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="#">Media Center</Footer.Link>
          <Footer.Link href="#">Buy Gift Cards</Footer.Link>
          <Footer.Link href="#">Cookie Preferences</Footer.Link>
          <Footer.Link href="#">Legal Notices</Footer.Link>
        </Footer.Column>
      </Footer.Row>
      <Footer.Break />
      <Footer.Text>Netflix India</Footer.Text>
    </Footer>
  );
};

FooterContainer.displayName = "FooterContainer";

export default FooterContainer;
