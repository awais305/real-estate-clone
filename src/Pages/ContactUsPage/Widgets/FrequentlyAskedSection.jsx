import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ExpandMoreOutlined";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import "./FrequentlyAskedSection.scss";
import React, { useEffect, useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { AssetPath } from "../../../Utils/Constants";

const FrequentlyAskedSection = () => {
  const [expanded, setExpanded] = useState("panel1");
  const [activeIndex, setActiveIndex] = useState(0);
  const [filterFaqs, setFilterFaqs] = useState([]);
  const isMobile = useMediaQuery("(max-width: 600px)"); // Adjust the breakpoint as needed

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  useEffect(() => {
    const tabContainer = document.querySelector(".tab_container");

    if (tabContainer) {
      checkScrollable(tabContainer);

      const handleResize = () => checkScrollable(tabContainer);
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  const checkScrollable = (element) => {
    const isScrollable = element.scrollWidth > element.clientWidth;

    if (isScrollable) {
      console.log("Tab items are exceeding the container width");
      // Do something when the tab items are exceeding the container width
    } else {
      console.log("Tab items are not exceeding the container width");
      // Do something when the tab items are not exceeding the container width
    }
  };

  return (
    <div className="frequently_asked_section">
      <div className="section_header_text">
        <span className="title">Frequently Asked Questions</span>
        <span className="subtitle">
          Quick answers to questions you may have. Can't find what you're
          looking for?
        </span>
      </div>
      <div style={{ width: "100%" }}>
        <div className="list_wrapper">
          <div className="tab_container">
            {faqButtons.map((option, index) => (
              <button
                key={index}
                className={`tab_button ${
                  activeIndex === index ? "active" : ""
                }`}
                onClick={() => {
                  setActiveIndex(index);
                  setFilterFaqs(faqs.filter((faq) => faq.type === option));
                  console.log("filterFaqs: ", filterFaqs);
                }}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="faq_n_image_wrapper">
        <div className="faqs">
          {(filterFaqs.length < 1 ? faqs : filterFaqs)?.map((faq) => {
            var isExpanded = expanded === faq.id;
            return (
              <Accordion
                key={faq.id}
                expanded={isExpanded}
                onChange={handleChange(faq.id)}
              >
                <AccordionSummary
                  iconcolor={isExpanded ? "white" : "var(--primary)"}
                  backgroundcolor={isExpanded ? "var(--primary)" : ""}
                  aria-controls="panel1d-content"
                  id="panel1d-header"
                >
                  <Typography
                    sx={{
                      fontWeight: "700",
                      fontSize: "15px",
                      color: isExpanded ? "white" : "var(--black)",
                    }}
                  >
                    {faq.title}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    sx={{
                      fontWeight: "400",
                      fontSize: "15px",
                      color: "#A3A3A3",
                    }}
                  >
                    {faq.desc}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            );
          })}
        </div>
        <img src={AssetPath.faqImage} alt="" className="faq_image" />
      </div>
    </div>
  );
};

export default FrequentlyAskedSection;

// PROPS ETC /////////////////////////////////////////////////

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid #B2B2B2`,
  borderRadius: "6px",
  "&:not(:last-child)": {
    marginBottom: "10px",
  },
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <ArrowForwardIosSharpIcon
        sx={{ color: props.iconcolor, fontSize: "25px" }}
      />
    }
    {...props}
  />
))(({ theme, ...props }) => ({
  flexDirection: "end",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(180deg)",
    color: "white",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: "0px",
  },
  backgroundColor: props.backgroundcolor,
  borderRadius: "5px 5px 0 0",
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const faqs = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet?",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et ",
    type: "Services",
  },
  {
    id: 2,
    title: "Another Lorem ipsum dolor sit amet?",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam risus leo, blandit vitae diam a, vestibulum viverra nisi. Vestibulum ullamcorper velit eget mattis aliquam. Proin dapibus luctus pulvinar. Integer et libero ut purus bibendum gravida non ac tellus. Proin sed tellus porttitor, varius mauris vitae, tincidunt augue. Sed consectetur magna elit, sit amet faucibus tortor sodales vitae. Maecenas quis arcu est. Nam sit amet neque vestibulum, fringilla elit sit amet, volutpat nunc.",
    type: "General",
  },
  {
    id: 3,
    title: "Another Lorem ipsum for general",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam risus leo, blandit vitae diam a, vestibulum viverra nisi. Vestibulum ullamcorper velit eget mattis aliquam. Proin dapibus luctus pulvinar. Integer et libero ut purus bibendum gravida non ac tellus. Proin sed tellus porttitor, varius mauris vitae, tincidunt augue. Sed consectetur magna elit, sit amet faucibus tortor sodales vitae. Maecenas quis arcu est. Nam sit amet neque vestibulum, fringilla elit sit amet, volutpat nunc.",
    type: "General",
  },
  {
    id: 4,
    title: "Account 1",
    desc: "This is description",
    type: "Accounts",
  },
  {
    id: 5,
    title: "Account 2",
    desc: "This is description",
    type: "Accounts",
  },
];

const faqButtons = [
  "All",
  "Services",
  "General",
  "Accounts",
  "FAQs",
  "Support",
  // "Contact",
  // "Privacy",
  // "Terms",
  // "Feedback",
  // "News",
  // "Events",
  // "Downloads",
  // "Jobs",
  // "Community",
  // "Blog",
  // "Tutorials",
  // "Resources",
  // "Features",
  // "Gallery",
];
