import { BlogTitleStyle, DateStyle } from './BlogTitle.style';

export default function BlogTitle({ children, date }) {
  return (
    <BlogTitleStyle>
      {children}
      <DateStyle dateTime={date}>{date}</DateStyle>
    </BlogTitleStyle>
  );
}
