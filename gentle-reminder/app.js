document.addEventListener('DOMContentLoaded', function() {
    // --- STATE & CONSTANTS ---
    const bookElement = document.getElementById('book');
    const pageFlipConfig = {
        width: 350,
        height: 550,
        size: "stretch",
        minWidth: 300,
        maxWidth: 450,
        minHeight: 400,
        maxHeight: 700,
        drawShadow: true,
        showCover: true,
        usePortrait: true,
        mobileScrollSupport: false,
        flippingTime: 800,
        swipeDistance: 30
    };
    
    let pageFlip = null;
    let bookmarks = JSON.parse(localStorage.getItem('gentle-bookmarks')) || [];
    let reflections = JSON.parse(localStorage.getItem('gentle-reflections')) || {};

    // --- DOM ELEMENTS ---
    const currentSpan = document.getElementById('page-current');
    const totalSpan = document.getElementById('page-total');
    const jumpInput = document.getElementById('input-jump');
    const jumpBtn = document.getElementById('btn-jump');
    const prevBtn = document.getElementById('btn-prev');
    const nextBtn = document.getElementById('btn-next');
    const todayBtn = document.getElementById('btn-today');
    
    const searchBtn = document.getElementById('btn-search-modal');
    const searchModal = document.getElementById('search-modal');
    const closeSearch = document.getElementById('close-search');
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');

    const bookmarksBtn = document.getElementById('btn-bookmarks-modal');
    const bookmarksModal = document.getElementById('bookmarks-modal');
    const closeBookmarks = document.getElementById('close-bookmarks');
    const bookmarksList = document.getElementById('bookmarks-list');

    // --- HTML GENERATOR ---
    function generatePagesHTML() {
        let html = '';
        
        bookPages.forEach((page, index) => {
            let innerHTML = '';
            let extraClasses = '';
            
            const isBookmarked = bookmarks.includes(index);
            const bookmarkIcon = `<button class="bookmark-toggle ${isBookmarked ? 'bookmarked' : ''}" data-page="${index}">
                ${isBookmarked ? '♥' : '♡'}
            </button>`;

            if (page.type === 'cover') {
                extraClasses = 'page-cover';
                innerHTML = `
                    <div class="page-content">
                        <h1>${page.title}</h1>
                        <p class="subtitle">${page.subtitle}</p>
                    </div>
                `;
            } else if (page.type === 'blank') {
                innerHTML = `<div class="page-content"></div>`;
            } else if (page.type === 'title') {
                extraClasses = 'page-title';
                innerHTML = `
                    <div class="page-content">
                        <h1>${page.content}</h1>
                    </div>
                `;
            } else if (page.type === 'chapter_divider') {
                extraClasses = 'chapter-divider';
                innerHTML = `
                    <div class="page-content">
                        <h2>${page.chapterNumber}</h2>
                        <p>${page.chapterTitle}</p>
                    </div>
                `;
            } else if (page.type === 'toc') {
                let tocItems = '';
                if (page.toc_entries) {
                    page.toc_entries.forEach(entry => {
                        tocItems += `
                            <li class="toc-item" data-target="${entry.page}">
                                <span>${entry.chapter} &mdash; ${entry.title}</span>
                                <span class="toc-dots"></span>
                                <span>${entry.page}</span>
                            </li>
                        `;
                    });
                }
                innerHTML = `
                    <div class="page-content">
                        <h2 class="toc-title">Table of Contents</h2>
                        <ul class="toc-list">${tocItems}</ul>
                        <div class="page-footer">${page.pageNum}</div>
                    </div>
                `;
            } else if (page.type === 'reflection') {
                extraClasses = 'page-reflection';
                const savedText = reflections[index] || '';
                innerHTML = `
                    ${bookmarkIcon}
                    <div class="page-content">
                        <p class="reflection-prompt">${page.prompt}</p>
                        <textarea class="reflection-input" data-page="${index}" placeholder="Type here...">${savedText}</textarea>
                        <div class="page-footer">${page.pageNum}</div>
                    </div>
                `;
            } else {
                // 'content' or 'special'
                if (page.type === 'special') extraClasses = 'page-special';
                
                let textHTML = '';
                if (Array.isArray(page.text)) {
                    page.text.forEach(p => { textHTML += `<p>${p}</p>`; });
                } else {
                    textHTML = `<p>${page.text}</p>`;
                }

                innerHTML = `
                    ${bookmarkIcon}
                    <div class="page-content">
                        <h2 class="page-header">${page.header}</h2>
                        <div class="page-text">${textHTML}</div>
                        <div class="page-footer">${page.pageNum}</div>
                    </div>
                `;
            }

            html += `<div class="page ${extraClasses}">${innerHTML}</div>`;
        });
        
        bookElement.innerHTML = html;
        totalSpan.textContent = bookPages.length;
    }

    // --- INITIALIZATION ---
    generatePagesHTML();
    bookElement.style.display = 'block';
    
    pageFlip = new St.PageFlip(bookElement, pageFlipConfig);
    pageFlip.loadFromHTML(document.querySelectorAll('.page'));
    
    pageFlip.on('flip', (e) => {
        currentSpan.textContent = e.data + 1; // e.data is 0-indexed target page
    });

    // --- EVENT LISTENERS ---

    // Navigation
    prevBtn.addEventListener('click', () => { pageFlip.flipPrev(); });
    nextBtn.addEventListener('click', () => { pageFlip.flipNext(); });
    
    jumpBtn.addEventListener('click', () => {
        let target = parseInt(jumpInput.value);
        if (isNaN(target)) return;
        target = target - 1; // 0-indexed
        if (target < 0) target = 0;
        if (target >= bookPages.length) target = bookPages.length - 1;
        pageFlip.turnToPage(target);
        jumpInput.value = '';
    });

    // TOC Clicks
    document.querySelectorAll('.toc-item').forEach(item => {
        item.addEventListener('click', () => {
            let target = parseInt(item.getAttribute('data-target')) - 1;
            pageFlip.turnToPage(target);
        });
    });

    // Reflections Save
    document.querySelectorAll('.reflection-input').forEach(input => {
        input.addEventListener('input', (e) => {
            const pageIdx = e.target.getAttribute('data-page');
            reflections[pageIdx] = e.target.value;
            localStorage.setItem('gentle-reflections', JSON.stringify(reflections));
        });
    });

    // Bookmarks Toggle
    document.querySelectorAll('.bookmark-toggle').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const pageIdx = parseInt(e.target.getAttribute('data-page'));
            const idxInArray = bookmarks.indexOf(pageIdx);
            
            if (idxInArray === -1) {
                bookmarks.push(pageIdx);
                e.target.classList.add('bookmarked');
                e.target.textContent = '♥';
            } else {
                bookmarks.splice(idxInArray, 1);
                e.target.classList.remove('bookmarked');
                e.target.textContent = '♡';
            }
            
            localStorage.setItem('gentle-bookmarks', JSON.stringify(bookmarks));
            renderBookmarksList(); // Update modal if open
        });
    });

    // A Page for Today
    todayBtn.addEventListener('click', () => {
        const meaningfulPages = bookPages.map((p, idx) => ({p, idx}))
            .filter(item => ['content', 'special', 'reflection'].includes(item.p.type));
            
        if (meaningfulPages.length > 0) {
            const randomPage = meaningfulPages[Math.floor(Math.random() * meaningfulPages.length)];
            pageFlip.turnToPage(randomPage.idx);
        }
    });

    // --- MODALS ---
    function openModal(modal) { modal.classList.add('active'); }
    function closeModal(modal) { modal.classList.remove('active'); }

    searchBtn.addEventListener('click', () => {
        openModal(searchModal);
        searchInput.focus();
    });
    closeSearch.addEventListener('click', () => closeModal(searchModal));

    bookmarksBtn.addEventListener('click', () => {
        renderBookmarksList();
        openModal(bookmarksModal);
    });
    closeBookmarks.addEventListener('click', () => closeModal(bookmarksModal));

    // Close on outside click
    window.addEventListener('click', (e) => {
        if (e.target === searchModal) closeModal(searchModal);
        if (e.target === bookmarksModal) closeModal(bookmarksModal);
    });

    // Search Logic
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        searchResults.innerHTML = '';
        
        if (query.length < 2) return;

        let resultsHTML = '';
        bookPages.forEach((page, idx) => {
            let searchableText = '';
            if (page.header) searchableText += page.header.toLowerCase() + ' ';
            if (Array.isArray(page.text)) searchableText += page.text.join(' ').toLowerCase();
            else if (page.text) searchableText += page.text.toLowerCase();
            if (page.prompt) searchableText += page.prompt.toLowerCase();
            
            if (searchableText.includes(query)) {
                const title = page.header || "Reflection Page";
                const preview = (page.text && Array.isArray(page.text)) ? page.text[0] : (page.prompt || "Go to page...");
                
                resultsHTML += `
                    <div class="result-item" data-target="${idx}">
                        <div class="result-title">Page ${idx + 1} - ${title}</div>
                        <div class="result-preview">${preview}</div>
                    </div>
                `;
            }
        });

        if (resultsHTML === '') {
            resultsHTML = '<p class="empty-state">No results found.</p>';
        }

        searchResults.innerHTML = resultsHTML;
        
        // Bind clicks
        document.querySelectorAll('#search-results .result-item').forEach(item => {
            item.addEventListener('click', () => {
                const target = parseInt(item.getAttribute('data-target'));
                pageFlip.turnToPage(target);
                closeModal(searchModal);
            });
        });
    });

    // Render Bookmarks
    function renderBookmarksList() {
        if (bookmarks.length === 0) {
            bookmarksList.innerHTML = '<p class="empty-state">No bookmarks yet. Tap the ♡ on any page to save it here.</p>';
            return;
        }

        bookmarks.sort((a,b) => a - b);
        
        let html = '';
        bookmarks.forEach(idx => {
            const page = bookPages[idx];
            const title = page.header || "Reflection Page";
            const preview = (page.text && Array.isArray(page.text)) ? page.text[0] : (page.prompt || "");
            
            html += `
                <div class="result-item" data-target="${idx}">
                    <div class="result-title">Page ${idx + 1} - ${title}</div>
                    <div class="result-preview">${preview}</div>
                </div>
            `;
        });
        
        bookmarksList.innerHTML = html;
        
        document.querySelectorAll('#bookmarks-list .result-item').forEach(item => {
            item.addEventListener('click', () => {
                const target = parseInt(item.getAttribute('data-target'));
                pageFlip.turnToPage(target);
                closeModal(bookmarksModal);
            });
        });
    }
});
