import { Build, BuildBlocksSet, Teams, Damage, BreackGraph, Ui, Properties, GameMode, Spawns} from 'pixel_combats/room';
import * as peace from './options.js';
import * as teams from './default_teams.js';
import * as API from 'pixel_combats/room';

// 
Damage.FriendlyFire = true;
BreackGraph.OnlyPlayerBlocksDmg = false;
BreackGraph.WeakBlocks = true;
// Возможность ломать блоки
BreackGraph.BreackAll = true;
// Отобразить Количество блоков
Ui.GetContext().QuadsCount.Value = true;
// хз
Build.GetContext().BlocksSet.Value = BuildBlocksSet.AllClear;
// Строительные функции
peace.set_editor_options(); 
// задает опции режима мир, выбранные при создании комнаты
export function apply_room_options() {
    const gameModeParameters = room.GameMode.Parameters;

    // опции строительства
    const buildContext = room.Build.GetContext();
    buildContext.FloodFill.Value = gameModeParameters.GetBool("FloodFill");
    buildContext.FillQuad.Value = gameModeParameters.GetBool("FillQuad");
    buildContext.RemoveQuad.Value = gameModeParameters.GetBool("RemoveQuad");
    buildContext.FlyEnable.Value = gameModeParameters.GetBool("Fly");
    
    // прочие опции
    room.Damage.GetContext().DamageOut.Value = gameModeParameters.GetBool("Damage");
    room.BreackGraph.OnlyPlayerBlocksDmg = gameModeParameters.GetBool("PartialDesruction");
    room.BreackGraph.WeakBlocks = gameModeParameters.GetBool("LoosenBlocks");
   if (API.GameMode.Parameters.GetBool("1hp")) API.contextedProperties.GetContext().MaxHp.Value = 1;
   if (API.GameMode.Parameters.GetBool("Zombie")) API.contextedProperties.GetContext().SkinType.Value = 1;
}

// Запрет урона
Damage.GetContext().DamageOut.Value = true;

// параметры игры
Properties.GetContext().GameModeName.Value = "Better-Peace";
// создаем команды
var red = GameMode.Parameters.GetBool("RedTeam");
var blue = GameMode.Parameters.GetBool("BlueTeam");
if (red || !red && !blue) teams.create_team_red();
if (blue || !red && !blue) teams.create_team_blue();

// leaderboard
API.LeaderBoard.PlayerLeaderBoardValues = [
    {
        Value: "Deaths",
        DisplayName: "Смерти",
        ShortDisplayName: "Смерти"
    },
    {
        Value: "Spawns",
        DisplayName: "Спавны",
        ShortDisplayName: "Спавны"
    }
];

// разрешаем вход в команды по запросу
room.Teams.OnRequestJoinTeam.add_Event(function (player, team) { team.Add(player); });
room.Teams.OnPlayerChangeTeam.Add(function (player) { player.Spawns.Spawn() });
// задаем подсказку
Ui.getContext().Hint.Value = "TIP: стройте карты в редакторе, а не в мире";
Ui.getContext().Hint.Value = "TIP: используй лопату , если строишь карту";
// конфигурация инвентаря
peace.set_editor_inventory();
// моментальный спавн
Spawns.GetContext().RespawnTime.Value = 3;
