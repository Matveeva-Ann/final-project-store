import FormikWrapper from './Formik/FormikWrapper';
import {TitleTwo} from 'components/common-styles/ProjectTitles/ProjectTitles.style';

export default function EmailNewsletter() {
  return (
    <div>
      <TitleTwo align="EmailTitle" >Підписуйтесь на нашу розсилку та дізнайтесь про новинки</TitleTwo>
      <FormikWrapper />
    </div>
  );
}
