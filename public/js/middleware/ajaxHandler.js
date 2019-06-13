import { makeServiceRequest } from '../services/common/ajax-service';
import { errorService } from '../services/common/error-service';
export const ajaxHandler = store => next => async action => {
    if (action && action.payLoad && action.payLoad.url) {
        console.log('url', action.payLoad.url);
		try {
			const {payLoad: {requestType,url,params=null,success},type} = action;
			const response = await makeServiceRequest(requestType,url,null,params);
			console.log('response recieved',response);
			if(response && response.data) {
				next(success(response.data));
			}
		}
		catch(e) {
			next(errorService(500, 'service error'));
		}
	}
	else {
		next(action);
	}
}