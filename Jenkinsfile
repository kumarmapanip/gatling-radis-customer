pipeline {
    agent any 
    stages {
	
	stage('Performance Test') {
	   steps {
			
			sh 'mvn gatling:test'
	       
       		}
		post {
            always {
                    gatlingArchive()
                }
            }
	}      	
	    
   }
}
