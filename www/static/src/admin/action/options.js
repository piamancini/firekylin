import Reflux from 'reflux';


let AsyncConfig = {asyncResult: true};
export default Reflux.createActions({
  save: {children: ['completed', 'failed'], asyncResult: true}
});