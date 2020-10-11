# Developer

###The project open a IDE
	
        code .

###Updated path configuration
 
tsconfig.json

        baseUrl: "src",
        paths:{
            "@core/*":["app/core/*"],
            "@shared/*":["app/shared/*"],
            "@environments/*":["environments/*"]
        }

 app-component.ts
   
    import { AuthService } from '../../../../core/auth.service';
    
    import { AuthService } from '@mycore/core/auth.service';

