import "./style.css";

function mostrarMenu() {
    let menu: any = document.getElementById("menu_links"); // Obtém o elemento do menu pelo ID
    let sombra: any = document.getElementById("sombra"); // Obtém o elemento da sombra pelo ID
    let menu_barras: any = document.getElementById("menu_barras"); // Obtém o elemento do botão do menu pelo ID

    let body = document.getElementsByTagName("body")[0]; // Obtém o elemento body (primeiro elemento)
    if (window.getComputedStyle(menu).left != "10px") { // Verifica se a propriedade 'left' do estilo computado do elemento do menu é diferente de 10px
        menu.style.left = "10px"; // Define a posição 'left' do menu como 10px movendo ele para direita
        sombra.style.right = "-10vw"; // Move a sombra para a direita
        menu_barras.setAttribute("aria-expanded", "true"); // Atualiza o atributo 'aria-expanded' para 'true'
        menu_barras.setAttribute("aria-label", "fechar menu"); // Atualiza o atributo 'aria-label' para 'fechar menu'
        body.style.overflow = "hidden"; // Define o overflow do body como "hidden" para evitar a rolagem da página
    } else {
        menu.style.left = "-500px";
        sombra.style.right = "110vw";
        menu_barras.setAttribute("aria-expanded", "false");
        menu_barras.setAttribute("aria-label", "abrir menu");
        body.style.overflow = "initial !important";
    }
    menu_barras.classList.toggle("ativo");
}

export default function Header() {
    return (
        <header className="container direction_row space_between header align_center">
            <div className="space_between direction_row ainhamento_links">
                <svg width="115" height="20" viewBox="0 0 115 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_21_692)">
                        <path d="M0 0.258301V1.66806L12.958 1.54929V0.258301H0Z" fill="url(#paint0_linear_21_692)" />
                        <path d="M0 9.29492V10.7047L12.958 10.5859V9.29492H0Z" fill="url(#paint1_linear_21_692)" />
                        <path d="M0 18.5903V20.0001L12.958 19.8813V18.5903H0Z" fill="url(#paint2_linear_21_692)" />
                        <path d="M42.2432 0V1.40976L55.2012 1.29099V0H42.2432Z" fill="url(#paint3_linear_21_692)" />
                        <path d="M42.2432 9.03711V10.4469L55.2012 10.3281V9.03711H42.2432Z" fill="url(#paint4_linear_21_692)" />
                        <path d="M42.2432 18.332V19.7418L55.2012 19.623V18.332H42.2432Z" fill="url(#paint5_linear_21_692)" />
                        <path d="M17.4829 0.258301H19.1364L26.8231 17.9448L35.0488 0.258301H36.5727L27.7042 20.0001H26.3488L17.4829 0.258301Z" fill="url(#paint6_linear_21_692)" />
                        <path d="M64.0646 20.0001H62.6755V0.258301H64.0646L77.3596 17.6867V0.258301H78.6217V20.0001H77.3648L64.1424 3.22758L64.0646 20.0001Z" fill="url(#paint7_linear_21_692)" />
                        <path d="M84.2454 0.258301H99.9298V1.58027H92.8158V20.0001H91.393V1.42019H84.2454V0.258301Z" fill="url(#paint8_linear_21_692)" />
                        <path d="M109.809 4.26025H108.459V15.9514H109.809V4.26025Z" fill="url(#paint9_linear_21_692)" />
                        <path d="M115.003 9.43213H103.268V10.7773H115.003V9.43213Z" fill="url(#paint10_linear_21_692)" />
                    </g>
                    <defs>
                        <linearGradient id="paint0_linear_21_692" x1="0" y1="0.963181" x2="12.958" y2="0.963181" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#B51D44" />
                            <stop offset="0.99" stop-color="#821B47" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_21_692" x1="0" y1="9.9998" x2="0.259161" y2="9.9998" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#B51D44" />
                            <stop offset="0.99" stop-color="#821B47" />
                        </linearGradient>
                        <linearGradient id="paint2_linear_21_692" x1="0" y1="19.2952" x2="0.259161" y2="19.2952" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#B51D44" />
                            <stop offset="0.99" stop-color="#821B47" />
                        </linearGradient>
                        <linearGradient id="paint3_linear_21_692" x1="42.2432" y1="0.70488" x2="55.2012" y2="0.70488" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#B51D44" />
                            <stop offset="0.99" stop-color="#821B47" />
                        </linearGradient>
                        <linearGradient id="paint4_linear_21_692" x1="42.2432" y1="9.74199" x2="55.2012" y2="9.74199" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#B51D44" />
                            <stop offset="0.99" stop-color="#821B47" />
                        </linearGradient>
                        <linearGradient id="paint5_linear_21_692" x1="42.2432" y1="19.0369" x2="55.2012" y2="19.0369" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#B51D44" />
                            <stop offset="0.99" stop-color="#821B47" />
                        </linearGradient>
                        <linearGradient id="paint6_linear_21_692" x1="17.4829" y1="10.1292" x2="36.5727" y2="10.1292" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#B51D44" />
                            <stop offset="0.99" stop-color="#821B47" />
                        </linearGradient>
                        <linearGradient id="paint7_linear_21_692" x1="62.6755" y1="10.1292" x2="78.6217" y2="10.1292" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#B51D44" />
                            <stop offset="0.99" stop-color="#821B47" />
                        </linearGradient>
                        <linearGradient id="paint8_linear_21_692" x1="84.2454" y1="10.1292" x2="99.9298" y2="10.1292" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#B51D44" />
                            <stop offset="0.99" stop-color="#821B47" />
                        </linearGradient>
                        <linearGradient id="paint9_linear_21_692" x1="108.459" y1="10.1059" x2="109.809" y2="10.1059" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#B51D44" />
                            <stop offset="0.99" stop-color="#821B47" />
                        </linearGradient>
                        <linearGradient id="paint10_linear_21_692" x1="103.268" y1="10.106" x2="115" y2="10.106" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#B51D44" />
                            <stop offset="0.99" stop-color="#821B47" />
                        </linearGradient>
                        <clipPath id="clip0_21_692">
                            <rect width="115" height="20" fill="white" />
                        </clipPath>
                    </defs>
                </svg>

                <nav className="space_between direction_row">
                    <a>Home</a>
                    <a>Eventos</a>
                    <a>Home</a>
                </nav>
            </div>

            <a href="" className="botao_logar">Logar</a>
        </header>
    )
}