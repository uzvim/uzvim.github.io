interface Resource {
  name: string;
  description: string;
  href: string; // the URL for the link
}

const resources: Resource[] = [
  { name: "vim.org", description: "rasmiy Vim veb-sayti", href: "https://www.vim.org/" },
  { name: "neovim.io", description: "Neovim rasmiy sayti", href: "https://neovim.io/" },
  { name: "vimawesome.com", description: "eng yaxshi Vim plugin lari", href: "https://vimawesome.com/" },
  { name: "vim.fandom.com", description: "Vim wiki va qo'llanmalar", href: "https://vim.fandom.com/" },
];

export { resources, type Resource };
