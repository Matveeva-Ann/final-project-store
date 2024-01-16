// import

import { BreadCrumbsItem, BreadCrumbsItemName, BreadCrumbsLink, BreadCrumbsList, Separator } from './breadCrumbs.style';

export default function BreadCrumbs({ name = '', arrLinks = [], separator }) {

  return (
    <>
      <BreadCrumbsList>
        {Array.isArray(arrLinks) &&
          arrLinks.map(elem => {
            // console.log(elem.link);
            return (
              <BreadCrumbsItem key={elem.name}>
                <BreadCrumbsLink to={`/${elem.link}`} key={elem}>
                  {elem.name}
                  <Separator> {separator} </Separator>
                </BreadCrumbsLink>
              </BreadCrumbsItem>
            );
          })}
        <BreadCrumbsItemName>{name}</BreadCrumbsItemName>
      </BreadCrumbsList>
    </>
  );
}
