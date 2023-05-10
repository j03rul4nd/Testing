const HtmlLoader =`
<div class="d-flex justify-content-center vh-100 vw-100 align-items-center">
    <div class="card w-75 " aria-hidden="true">
        <div class="card-body">
            <h5 class="card-title placeholder-glow">
            <span class="placeholder col-6"></span>
            </h5>
            <p class="card-text placeholder-glow">
            <span class="placeholder col-7"></span>
            <span class="placeholder col-4"></span>
            <span class="placeholder col-4"></span>
            <span class="placeholder col-6"></span>
            <span class="placeholder col-8"></span>
            </p>
            <a href="#" tabindex="-1" class="btn btn-primary disabled placeholder col-6"></a>
        </div>
    </div>
</div>
`;

export function loader (){
    const content = document.getElementById('content')
    content.innerHTML = HtmlLoader;
}