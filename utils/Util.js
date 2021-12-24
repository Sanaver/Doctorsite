import { capitalize, replace, isEmpty, size } from 'lodash';

class Util {
  // Convert slug into a readable string
  static readableSlug = slug => capitalize(replace(slug, '-', ' '));

  // Append s for plural values
  static valPlural = (arr = []) => size(arr) !== 1 ? 's' : '';

  static scrollToTop = () => {
    window.scroll({
      top: 0,
      left: 0,
    })
  }
}
export default Util;
