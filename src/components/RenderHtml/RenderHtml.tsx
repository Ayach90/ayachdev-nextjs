"use client";

type Props = { html: string };

const RenderHtml = ({ html }: Props) => {
  return <span dangerouslySetInnerHTML={{ __html: html }}></span>;
};

export default RenderHtml;
