$ErrorActionPreference = "Stop"

$contentDir = "content_data"
$outputFile = "content.js"

$files = @("ch0_4.json", "ch5_8.json", "ch9_12.json", "ch13_16.json")
$allPages = @()

foreach ($file in $files) {
    $path = Join-Path $contentDir $file
    if (Test-Path $path) {
        $jsonStr = Get-Content -Raw $path
        $data = $jsonStr | ConvertFrom-Json
        $allPages += $data
    } else {
        Write-Warning "$file not found."
    }
}

# Assign page numbers and fix TOC
$tocEntries = @()
$currentPageNumber = 1

foreach ($page in $allPages) {
    # PowerShell ConvertFrom-Json creates PSCustomObjects. We can add properties.
    $page | Add-Member -MemberType NoteProperty -Name "pageNum" -Value $currentPageNumber -Force
    
    if ($page.type -eq "chapter_divider") {
        $entry = [pscustomobject]@{
            chapter = $page.chapterNumber
            title = $page.chapterTitle
            page = $currentPageNumber
        }
        $tocEntries += $entry
    }
    $currentPageNumber++
}

# Inject TOC into the TOC page
foreach ($page in $allPages) {
    if ($page.type -eq "toc") {
        $page | Add-Member -MemberType NoteProperty -Name "toc_entries" -Value $tocEntries -Force
    }
}

# Convert back to JSON
$jsonOutput = $allPages | ConvertTo-Json -Depth 10

# Write to content.js
$jsContent = "const bookPages = " + $jsonOutput + ";`n"
$jsContent += "if (typeof module !== 'undefined' && module.exports) { module.exports = { bookPages }; }"

Set-Content -Path $outputFile -Value $jsContent -Encoding UTF8

Write-Host "Successfully compiled $($allPages.Count) pages into $outputFile."
