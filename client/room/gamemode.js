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
        Value: "rid",
        DisplayName: "QU",
        ShortDisplayName: "QU"
    },
    {
        Value: "status",
        DisplayName: "Status",
        ShortDisplayName: "Status"
    }
];

// разрешаем вход в команды по запросу
Teams.OnRequestJoinTeam.add_Event(function (player, team) { team.Add(player); });
// спавн по входу в команду
Teams.OnPlayerChangeTeam.add_Event(function (player) { player.Spawns.Spawn(); });
// задаем подсказку
Ui.getContext().Hint.Value = "TIP: стройте карты в редакторе, а не в мире", "TIP: если вы строите карту то лопата вам пригодится!";
// конфигурация инвентаря
peace.set_editor_inventory();

// smeika
Player.Properties.Get("Player").Value = "Player"

// моментальный спавн
Spawns.GetContext().RespawnTime.Value = 3;
