export function Navbar() {
  function currentHash() {
    const { hash } = location;

    if (hash.length === 0) return "home";

    return hash.replace("#", "");
  }

  return (
    <nav className="flex items-center justify-between lg:mx-12 lg:py-4">
      <a href="#home">
        <div className="inline-flex items-center gap-2">
          <svg
            width="28"
            height="29"
            viewBox="0 0 28 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.0786037 17.6936C0.471553 15.7543 0.895597 14.0977 1.66736 12.0425C1.85111 11.545 1.93027 11.3612 2.49001 11.2312C5.29248 10.5848 8.69804 9.682 12.7067 8.52295C13.3286 8.3439 13.8384 8.13659 14.2361 7.90101C14.3247 7.84824 14.3784 7.77191 14.3972 7.67203C14.5687 6.79566 14.7355 5.92496 14.8976 5.05991C15.3923 2.40538 17.7868 2.73331 19.7261 2.05483C21.312 1.49792 23.3107 1.11628 24.5658 0.754428C25.4347 0.50377 26.328 0.259708 27.2458 0.0222421C27.5134 -0.0474899 27.6962 0.0467425 27.7942 0.304939C27.8809 0.529212 27.8545 0.845833 27.7151 1.2548C27.2062 2.75687 26.7869 4.2872 26.4571 5.8458C26.3817 6.20389 26.0754 6.46114 25.5383 6.61757C22.1572 7.61078 18.7639 8.55781 15.3584 9.45867C11.9547 10.3605 13.959 14.3239 11.4091 15.0476C7.89424 16.0465 4.24273 17.0472 0.45459 18.0498C0.404454 18.0629 0.351827 18.0629 0.301664 18.05C0.251501 18.0371 0.20545 18.0116 0.167845 17.976C0.13024 17.9404 0.102318 17.8957 0.0867057 17.8464C0.0710937 17.797 0.068306 17.7444 0.0786037 17.6936Z"
              fill="black"
            />
            <path
              d="M0.00510541 28.8715C0.437632 26.6891 0.949313 24.4755 1.82002 22.4514C1.8482 22.3854 1.89084 22.3266 1.94471 22.2796C1.99858 22.2326 2.06227 22.1985 2.13099 22.18C5.60062 21.2434 9.07686 20.3171 12.5597 19.4011C14.1145 18.9941 14.6064 18.4371 14.7534 16.806C14.9089 15.0617 15.446 14.0299 17.1903 13.5747C19.8222 12.8878 22.4824 12.3111 25.0634 11.4432C25.8191 11.1888 26.5871 10.9824 27.3674 10.8241C27.4284 10.8118 27.4916 10.8143 27.5515 10.8312C27.6114 10.8481 27.6664 10.8791 27.7118 10.9214C27.7572 10.9638 27.7917 11.0163 27.8124 11.0746C27.8332 11.1329 27.8395 11.1953 27.831 11.2566C27.6642 12.4977 27.1553 13.6058 26.915 14.7875C26.6974 15.8533 26.4005 17.3346 25.1652 17.6314C22.3457 18.3137 18.9006 19.2391 14.8297 20.4075C13.2947 20.8485 12.8735 23.5907 12.6671 24.9335C12.6501 25.0353 12.604 25.1201 12.5286 25.1879C12.0499 25.6233 11.4496 25.9371 10.7278 26.1293C7.19598 27.0754 3.66415 28.029 0.132319 28.9902C0.0267791 29.0204 -0.0156257 28.9808 0.00510541 28.8715Z"
              fill="black"
            />
          </svg>
          <h1 className="text-xl tracking-widest">NEXCO</h1>
        </div>
      </a>
      <div data-tab={currentHash()} className="group inline-flex gap-4">
        <button className="opacity-60 text-sm group-data-[tab=home]:opacity-100 hover:opacity-100">
          Company
        </button>
        <button className="opacity-60 text-sm group-data-[tab=pricing]:opacity-100 hover:opacity-100">
          Pricing
        </button>
        <button className="opacity-60 text-sm group-data-[tab=contact]:opacity-100 hover:opacity-100">
          Contact
        </button>
      </div>
      <div className="inline-flex gap-4">
        <button className="text-sm hover:opacity-70">Log in</button>
        <button className="px-5 py-1.5 text-sm bg-[#D9E8B7] rounded-3xl">
          Get started
        </button>
      </div>
    </nav>
  );
}
