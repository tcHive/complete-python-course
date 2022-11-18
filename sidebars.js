/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    "intro/intro",
    {
      type: "category",
      label: "Python Fundamentals",
      items: [
        "intro/lectures/and_or/README",
        // {
        //   type: "autogenerated",
        //   dirName: "1_intro/lectures",
        // },
      ],
    },
  ],
};

module.exports = sidebars;
