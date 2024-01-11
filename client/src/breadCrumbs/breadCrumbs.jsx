// import

import { BreadCrumbsItem, BreadCrumbsItemName, BreadCrumbsLink, BreadCrumbsList } from './breadCrumbs.style';

export default function BreadCrumbs({ name = '', arrLinks = [] }) {
  return (
    <>
      <BreadCrumbsList>
        {Array.isArray(arrLinks) &&
          arrLinks.map(elem => {
            console.log(elem.link);
            return (
              <BreadCrumbsItem key={elem.name}>
                <BreadCrumbsLink to={`/${elem.link}`} key={elem}>
                  {elem.name}
                </BreadCrumbsLink>
              </BreadCrumbsItem>
            );
          })}
        <BreadCrumbsItemName>{name}</BreadCrumbsItemName>
      </BreadCrumbsList>
    </>
  );
}
