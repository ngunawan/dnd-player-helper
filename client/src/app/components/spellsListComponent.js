angular.module('app').component('spellsList', {
    template: `<div class="block">
    <a href="#">Bard</a>
    <a href="#">Cleric</a>
    <a href="#">Druid</a>
    <a href="#">Paladin</a>
    <a href="#">Ranger</a>
    <a href="#">Sorcerer</a>
    <a href="#">Warlock</a>
    <a href="#">Wizard</a>


    <label>Search Name</label><input ng-model="query[queryBy]" type="text">
    <table>
        <tr>
            <th>Spell Name</th>
            <th>Level</th>
            <th>School</th>
            <th>Casting Time</th>
            <th>Range</th>
            <th>Components</th>
            <th>Duration</th>
            <th>Spell Description</th>
        </tr>
        <tr ng-repeat="spell in spellsList | filter:query">
            <td>{{spell.name}}</td>
            <td>{{spell.level}}</td>
            <td>{{spell.school}}</td>
            <td>{{spell.castingtime}}</td>
            <td>{{spell.range}}</td>
            <td>{{spell.components}}</td>
            <td>{{spell.duration}}</td>
            <td ng-bind-html=spell.description></td>
        </tr>
    </table>
</div>
`,
    bindings: {},
    controller: 'spellsListController as controller'
});
