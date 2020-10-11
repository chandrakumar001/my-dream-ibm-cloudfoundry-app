# Developer

###The project open a IDE
	
        code .

CLI:

        ng g m core
        ng g m shared
        ng g s core/auth

###Updated path configuration(Relative path)
 
tsconfig.json

        "baseUrl": "src",
        "paths":{
            "@core/*":["app/core/*"],
            "@shared/*":["app/shared/*"],
            "@environments/*":["environments/*"]
        }

 app-component.ts
   
    // import { AuthService } from '../../../../core/auth.service';
    
    import { AuthService } from '@core/auth.service';

why do we need 'index.ts' file?
  

