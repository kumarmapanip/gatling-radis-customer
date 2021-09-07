pipeline {
    agent any 
    stages {
	
	stage('Performance Test') {
	   steps {
			
			sh 'cd product-service-gatling; mvn gatling:test'
	       
       		}
		post {
            always {
                    gatlingArchive()
                }
            }
	}      	
	    
   }
}
