/*
    Développé par l'équipe technique de Wiibus
    Date de création: 2022
    Type de fichier: JS
*/

(async function() {
    
    // Récupération du paramètre COMPANY dans le URL
    var url = new URL(window.location.href);
    let company = url.searchParams.get("company");

    if(company !== null) {

        // NOTE Créer une image temporaire pour vérifier si elle existe dans le dossier "./company"
        const companyImage = new Image();
        companyImage.src = './company/'+company+".png";
        
        // L'image existe
        companyImage.onload = async() => {
            document.getElementById('main').style.display = "block";
            document.getElementById('company_logo').src = companyImage.src;

            // Ajouter un bouton personnalisé pour JOSY
            if(company === 'josy'){
                var element = document.createElement('div');
                element.innerHTML = `
                    <div class="card" style="margin-bottom: 15px; padding: 15px">
                        <a href="https://www.wiibus.com/wp-content/uploads/2022/12/JOSY-CATAL_2023_150dpi.pdf"><div class="button-open">Ouvrir le catalogue de voyage</div></a>
                    </div>
                `
                document.getElementById('main').prepend(element);
            } 
        };
        
        // Image inéxistante
        companyImage.onerror = async () => {
            // Vérification avec différents extensions
            if(companyImage.src.includes('.png')) {
                companyImage.src = './company/'+company+".jpg";
            } else if (companyImage.src.includes('.jpg')) {
                companyImage.src = './company/'+company+".jpeg";
            } else if(companyImage.src.includes('.jpeg')) {
                companyImage.src = './company/'+company+".svg";
            } else {
                return;
            }
        };
    }
 })();