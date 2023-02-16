/* global instantsearch algoliasearch */

const search = instantsearch({
  indexName: 'project_index',
  searchClient: algoliasearch('DIPTADZ4CS', '8f1ac92b86a03aa077fde76c18781eb8'),
});

search.addWidgets([
  instantsearch.widgets.searchBox({
    container: '#searchbox',
  }),
  instantsearch.widgets.clearRefinements({
    container: '#clear-refinements',
  }),
  instantsearch.widgets.refinementList({
    container: '#project-type',
    attribute: 'type',
  }),
  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      item: `
        <div>
          
          <div class="hit-name">
           <a href="https://projects.unitedtalent.com/project/{{objectID}}"> {{#helpers.highlight}}{ "attribute": "name" }{{/helpers.highlight}}</a>
          </div>
          <div class="hit-description">
            {{#helpers.highlight}}{ "attribute": "log_line" }{{/helpers.highlight}}
          </div>
          <div class="project-type">{{type}}</div>
        </div>
      `,
    },
  }),
  instantsearch.widgets.pagination({
    container: '#pagination',
  }),
]);

search.start();
