/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { connect } from 'react-redux';
import { addNotice } from '../store/actions/add-notice.js';

/**
 * Additional props which are passed to your component
 * @alias AddNoticeProps
 * @memberof withNotice
 */

const mapDispatchToProps = dispatch => ({
  addNotice: notice => dispatch(addNotice(notice))
});

/**
 * Higher Order Component which allows you to post notice messages from your components
 *
 * It gives you the additional prop: `addNotice(noticeMessage)` taking {@link NoticeMessage}.
 *
 * ```javascript
 * import { withNotice } from 'adminjs/core'
 *
 * const MY_MESSAGE = {
 *   message: 'I am toast message',
 *   type: 'success',
 * }
 * const MyCustomComponent = ({ addNotice }) => {
 *   return (
 *     <a onClick={() => addNotice(MY_MESSAGE)}>Click Me</a>
 *   )
 * }
 * export default withNotice(MyCustomComponent)
 * ```
 *
 * @component
 * @subcategory HOC
 */
const withNotice = Component => connect(null, mapDispatchToProps)(Component);
export { withNotice as default, withNotice };