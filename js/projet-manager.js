// js/projet-manager.js

document.addEventListener('DOMContentLoaded', () => {
    // --- 1. RÉCUPÉRATION DES DONNÉES DU PROJET ---
    const params = new URLSearchParams(window.location.search);
    const projectId = params.get('id');
    const currentFilter = params.get('filter') || 'all';

    const projectIndex = PROJECTS_DATA.findIndex(p => p.id === projectId);
    const currentProject = PROJECTS_DATA[projectIndex];

    if (!currentProject) return;

    document.title = `${currentProject.title} | Alice Auger`;

    // Échappe une valeur avant de l'insérer dans un attribut HTML (alt, aria-label).
    const escAttr = (v) => String(v == null ? '' : v)
        .replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

    // --- Métadonnées de partage propres au projet ---
    // Lues par Google et les navigateurs qui exécutent le JS. Les aperçus des
    // réseaux sociaux / messageries lisent le HTML statique de projets.html :
    // un lien vers un projet y affiche donc l'aperçu général du site.
    const setMeta = (selector, value) => {
        const el = document.querySelector(selector);
        if (el && value) el.setAttribute('content', value);
    };
    const firstParagraph = (currentProject.description || '').split('\n\n')[0].replace(/\s+/g, ' ').trim();
    const shortDesc = firstParagraph.length > 160
        ? firstParagraph.slice(0, 157).replace(/\s+\S*$/, '') + '…'
        : firstParagraph;
    setMeta('meta[name="description"]', shortDesc);
    setMeta('meta[property="og:title"]', document.title);
    setMeta('meta[property="og:description"]', shortDesc);
    if (currentProject.imageHero) {
        setMeta('meta[property="og:image"]', new URL(currentProject.imageHero, window.location.href).href);
        setMeta('meta[property="og:image:alt"]', currentProject.heroAlt || currentProject.title);
        // Dimensions inconnues pour l'image du projet : on retire celles de l'image générale.
        document.querySelectorAll('meta[property="og:image:width"], meta[property="og:image:height"]')
            .forEach(el => el.remove());
    }

    // --- 2. MISE À JOUR DU CONTENU ---
    const nameEl = document.querySelector('.name-project .reveal-text');
    const catEl = document.querySelector('.projet-category');
    const yearEl = document.querySelector('.project-year');
    const descContainer = document.querySelector('.description-text');
    const detailsContainer = document.querySelector('.project-details');
    const heroImgEl = document.getElementById('project-hero-img');

    if (nameEl) nameEl.innerHTML = currentProject.displayTitle || currentProject.title;
    if (catEl) catEl.textContent = currentProject.displayCategory || '';
    if (yearEl) yearEl.textContent = currentProject.year || '';

    if (descContainer && currentProject.description) {
        const paragraphs = currentProject.description.split('\n\n');
        descContainer.innerHTML = paragraphs
            .map(p => `<p>${p.replace(/\n/g, '<br>')}</p>`)
            .join('');
    }

    // --- HERO ---
    if (heroImgEl && currentProject.imageHero) {
        heroImgEl.src = currentProject.imageHero;
        heroImgEl.alt = currentProject.heroAlt || currentProject.title;

        if (heroImgEl.complete) {
            heroImgEl.classList.add('loaded');
        } else {
            heroImgEl.onload = () => heroImgEl.classList.add('loaded');
        }
    }

    // --- MÉTADONNÉES ---
    if (detailsContainer) {
        const rows = [];

        if (currentProject.client) {
            rows.push(`
                <li>
                    <span class="meta-label">Client</span>
                    <span class="meta-value">${currentProject.client}</span>
                </li>`);
        }

        if (currentProject.displayCategory) {
            rows.push(`
                <li>
                    <span class="meta-label">Catégorie</span>
                    <span class="meta-value">${currentProject.displayCategory}</span>
                </li>`);
        }

        if (currentProject.year) {
            rows.push(`
                <li>
                    <span class="meta-label">Année</span>
                    <span class="meta-value">${currentProject.year}</span>
                </li>`);
        }

        if (Array.isArray(currentProject.prestations) && currentProject.prestations.length) {
            const items = currentProject.prestations.map(p => `<li>${p}</li>`).join('');
            rows.push(`
                <li>
                    <span class="meta-label">Prestations</span>
                    <ul class="meta-services">${items}</ul>
                </li>`);
        }

        detailsContainer.innerHTML = rows.join('');
    }

    // --- 3. GALERIE ---
    const galleryGrid = document.getElementById('project-grid');

    if (galleryGrid && Array.isArray(currentProject.gallery)) {
        /*
         * Chapitres (optionnel) : si des médias de la galerie ont un champ
         * `chapter` (voir data.js), la galerie est découpée en groupes, chacun
         * précédé d'un intitulé au même style que le libellé « Galerie ».
         * Un média sans `chapter` reste dans le chapitre précédent.
         * Sans aucun `chapter`, il n'y a qu'un seul groupe et rien ne change.
         * Chaque chapitre a sa propre grille : la mise en page dense d'un
         * chapitre ne peut donc jamais remonter dans le précédent.
         */
        const chapters = [];
        currentProject.gallery.forEach(media => {
            const last = chapters[chapters.length - 1];
            const title = media.chapter || (last ? last.title : '');
            if (last && last.title === title) last.items.push(media);
            else chapters.push({ title, items: [media] });
        });

        const galleryLabel = document.querySelector('.project-gallery .next-label .txt-label');
        let mediaIndex = 0;
        let previousGrid = null;

        chapters.forEach((chapter, chapterIndex) => {
            let grid = galleryGrid;

            if (chapterIndex === 0) {
                // Le premier chapitre réutilise le libellé « Galerie » existant.
                if (chapter.title && galleryLabel) galleryLabel.textContent = chapter.title;
            } else {
                const heading = document.createElement('div');
                heading.className = 'next-label';
                heading.style.margin = 'clamp(56px, 8vw, 112px) 0 32px';
                heading.innerHTML = '<span class="txt-label"></span><div class="divider-line"></div>';
                heading.querySelector('.txt-label').textContent = chapter.title;

                grid = document.createElement('div');
                grid.className = 'project-grid';

                previousGrid.after(heading);
                heading.after(grid);
            }

            fillGrid(grid, chapter.items);
            previousGrid = grid;
        });

        function fillGrid(grid, items) {
            grid.innerHTML = '';

            items.forEach(media => {
                const item = document.createElement('div');
                item.className = `reveal-mask project-grid-item ${media.layout || 'square'}`;
                item.dataset.index = mediaIndex++;

                const isVideo = media.src.toLowerCase().endsWith('.mp4');

                if (isVideo) {
                    item.innerHTML = `
                    <video
                        src="${media.src}"
                        class="video-gallery"
                        autoplay
                        muted
                        loop
                        playsinline
                        webkit-playsinline
                        preload="metadata"
                        aria-label="${escAttr(media.alt || currentProject.title)}">
                    </video>`;
                } else {
                    item.innerHTML = `
                    <img
                        src="${media.src}"
                        loading="lazy"
                        decoding="async"
                        alt="${escAttr(media.alt || currentProject.title)}">`;
                }

                grid.appendChild(item);
            });

            /*
             * On ne calcule la hauteur qu'après que les médias aient une largeur
             * réelle. ResizeObserver remplace l'ancien listener window.resize :
             * la grille se recalcule seulement quand sa largeur change réellement.
             */
            const recalc = () => requestAnimationFrame(() => resizeAllGridItems(grid));

            const mediaReady = Array.from(grid.querySelectorAll('img, video'));
            mediaReady.forEach(media => {
                if (media.tagName === 'IMG') {
                    if (!media.complete) media.addEventListener('load', recalc, { once: true });
                } else if (media.readyState < 1) {
                    media.addEventListener('loadedmetadata', recalc, { once: true });
                }
            });

            recalc();

            if ('ResizeObserver' in window) {
                const gridResizeObserver = new ResizeObserver(recalc);
                gridResizeObserver.observe(grid);
            } else {
                window.addEventListener('resize', recalc, { passive: true });
            }
        }
    }

    /*
     * Calcule le nombre de lignes nécessaire pour respecter le ratio demandé.
     *
     * Formule :
     *   hauteur voulue = largeur / ratio
     *   span = ceil((hauteur + gap) / (row + gap))
     *
     * Le même gap sert horizontalement et verticalement, ce qui garantit
     * une trame régulière.
     */
    function resizeGridItem(item, grid) {
        if (window.matchMedia('(max-width: 899px)').matches) {
            item.style.removeProperty('grid-row-end');
            return;
        }

        const styles = getComputedStyle(grid);
        const rowUnit = parseFloat(styles.getPropertyValue('--gallery-row')) || 8;
        const rowGap = parseFloat(styles.getPropertyValue('row-gap')) || 0;
        const ratio = parseRatio(getComputedStyle(item).getPropertyValue('--media-ratio'));
        const itemWidth = item.getBoundingClientRect().width;

        if (!itemWidth || !ratio) return;

        const desiredHeight = itemWidth / ratio;

        // Hauteur réelle d'un bloc Grid :
        // span * rowUnit + (span - 1) * gap
        // On choisit le plus petit span qui atteint la hauteur voulue.
        // Grid height for N rows:
        // N * rowUnit + (N - 1) * rowGap
        // We need this value to be >= desiredHeight.
        const span = Math.max(1, Math.ceil(
            (desiredHeight + rowGap) / (rowUnit + rowGap)
        ));

        item.style.gridRowEnd = `span ${span}`;
    }

    function resizeAllGridItems(grid) {
        grid.querySelectorAll('.project-grid-item').forEach(item => {
            resizeGridItem(item, grid);
        });
    }

    function parseRatio(value) {
        const parts = value.trim().split('/').map(Number);
        if (parts.length !== 2 || !parts[0] || !parts[1]) return 1;
        return parts[0] / parts[1];
    }

    // --- 4. NAVIGATION SUIVANT ---
    const nextLink = document.getElementById('next-project-link');
    const nextTitle = document.getElementById('next-project-title');
    const nextImg = document.getElementById('next-project-img');

    let filteredList = PROJECTS_DATA;
    if (currentFilter && currentFilter !== 'all') {
        filteredList = PROJECTS_DATA.filter(p => Array.isArray(p.tags) && p.tags.includes(currentFilter));
    }

    let filteredIndex = filteredList.findIndex(p => p.id === projectId);

    if (filteredIndex === -1) {
        filteredList = PROJECTS_DATA;
        filteredIndex = filteredList.findIndex(p => p.id === projectId);
    }

    if (filteredIndex !== -1 && filteredList.length > 0) {
        const nextProject = filteredList[(filteredIndex + 1) % filteredList.length];
        const targetUrl = `projets.html?id=${nextProject.id}&filter=${currentFilter}`;

        if (nextLink) nextLink.setAttribute('href', targetUrl);
        if (nextTitle) nextTitle.textContent = nextProject.title;
      // Injecte l'imageHero du projet suivant
    if (nextImg && nextProject.imageHero) {
        nextImg.src = nextProject.imageHero;
  
    }
    }

    // --- 5. INTERSECTION OBSERVER ---
    const observerOptions = { threshold: 0.1 };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;

            entry.target.classList.add('is-visible');

            const video = entry.target.querySelector('video.video-gallery');
            if (video) {
                video.muted = true;
                const playPromise = video.play();

                if (playPromise !== undefined) {
                    playPromise.catch(() => {});
                }

                video.onclick = function () {
                    this.muted = !this.muted;
                    this.classList.toggle('sound-on', !this.muted);
                };
            }

            revealObserver.unobserve(entry.target);
        });
    }, observerOptions);

    document.querySelectorAll('.project-grid .reveal-mask').forEach(el => revealObserver.observe(el));
    if (nextLink) revealObserver.observe(nextLink);

    // --- 6. BOUTON RETOUR ---
    const backButton = document.getElementById('back-button');
    if (backButton) {
        backButton.addEventListener('click', (e) => {
            e.preventDefault();

            if (document.referrer && document.referrer.includes(window.location.hostname)) {
                history.back();
            } else {
                window.location.href = `index.html?filter=${currentFilter}#portfolio`;
            }
        });
    }
});