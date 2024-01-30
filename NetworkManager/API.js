import BaseApiService from './BaseApiServices';
import { APIRequests, BaseURL ,SERVER} from './NetworkConstants';
import { LoginManager } from 'react-native-fbsdk-next'

function login(username, password, fcm_token, device_type) {
    let params = new FormData();
    params.append('username', username);
    params.append('password', password);
   params.append('server_key', SERVER.key);
    return BaseApiService.post(BaseURL + APIRequests.login, params);
  }

function FBlogin(){
    LoginManager.logInWithPermissions(["public_profile", "email"]).then(
        function (result) {
        if (result.isCancelled) {
        alert("Login Cancelled " + JSON.stringify(result))
        } else {
        alert("Login success with  permisssions: " + result.grantedPermissions.toString());
        alert("Login Success " + result.toString());
        }
        },
        function (error) {
        alert("Login failed with error: " + error);
        })
}

