"use client";

type Props = { html: string };

const RenderHtml = ({ html }: Props) => {
  return <div dangerouslySetInnerHTML={{ __html: html }}></div>;
};

export default RenderHtml;
