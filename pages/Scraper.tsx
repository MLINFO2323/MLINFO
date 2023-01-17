export default async function ScrapeDatasetNames(){
  let resp = await fetch('https://archive.ics.uci.edu/ml/machine-learning-databases/');
  let htmlData = await resp.text();
  const { JSDOM } = require('jsdom')
  const { document } = new JSDOM(
    htmlData
  ).window

  const heading = document.querySelectorAll('ul>li>a');
  let datasetsList = [];
  let ok = 0;
  heading.forEach(element => {
    if(element.innerHTML.trim() == "abalone/")
      ok = 1;
    if(ok == 1)
      datasetsList.push(element.innerHTML.trim())
  });
  return datasetsList;
}