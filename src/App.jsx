import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import './style.css';

const playoffsDataShanghai = [
  {
    id: 'r1-1',
    bracket: 'upper',
    round: 'Ronde 1',
    date: 'Champions Shanghai',
    format: 'BO3',
    team1: { name: '100 Thieves', code: '100T', badgeClass: 'badge-100t', region: 'AMERICAS', score: 0, isWinner: false },
    team2: { name: 'G2 Esports', code: 'G2', badgeClass: 'badge-g2', region: 'AMERICAS', score: 2, isWinner: true },
    veto: '100T ban Haven; G2 ban Sunset; 100T pick Lotus; G2 pick Bind.',
    maps: [
      { map: 'Lotus', pick: '100T Pick', score: '9 - 13', winner: 'G2 Esports' },
      { map: 'Bind', pick: 'G2 Pick', score: '8 - 13', winner: 'G2 Esports' }
    ],
    mvp: { player: 'leaf', team: 'G2 Esports', acs: 261, kd: '38/24' }
  },
  {
    id: 'r1-2',
    bracket: 'upper',
    round: 'Ronde 1',
    date: 'Champions Shanghai',
    format: 'BO3',
    team1: { name: 'Team Vitality', code: 'VIT', badgeClass: 'badge-vit', region: 'EMEA', score: 2, isWinner: true },
    team2: { name: 'NONGSHIM REDFORCE', code: 'NS', badgeClass: 'badge-ns', region: 'PACIFIC', score: 1, isWinner: false },
    veto: 'VIT ban Ascent; NS ban Bind; VIT pick Haven; NS pick Abyss; Lotus remains.',
    maps: [
      { map: 'Haven', pick: 'VIT Pick', score: '13 - 8', winner: 'Team Vitality' },
      { map: 'Abyss', pick: 'NS Pick', score: '10 - 13', winner: 'NONGSHIM REDFORCE' },
      { map: 'Lotus', pick: 'Decider', score: '13 - 9', winner: 'Team Vitality' }
    ],
    mvp: { player: 'Derke', team: 'Team Vitality', acs: 278, kd: '56/39' }
  },
  {
    id: 'r1-3',
    bracket: 'upper',
    round: 'Ronde 1',
    date: 'Champions Shanghai',
    format: 'BO3',
    team1: { name: 'NRG', code: 'NRG', badgeClass: 'badge-nrg', region: 'AMERICAS', score: 2, isWinner: true },
    team2: { name: 'T1', code: 'T1', badgeClass: 'badge-t1', region: 'PACIFIC', score: 0, isWinner: false },
    veto: 'NRG ban Split; T1 ban Sunset; NRG pick Lotus; T1 pick Haven.',
    maps: [
      { map: 'Lotus', pick: 'NRG Pick', score: '13 - 10', winner: 'NRG' },
      { map: 'Haven', pick: 'T1 Pick', score: '13 - 7', winner: 'NRG' }
    ],
    mvp: { player: 'Keiko', team: 'NRG', acs: 254, kd: '40/25' }
  },
  {
    id: 'r1-4',
    bracket: 'upper',
    round: 'Ronde 1',
    date: 'Champions Shanghai',
    format: 'BO3',
    team1: { name: 'Paper Rex', code: 'PRX', badgeClass: 'badge-prx', region: 'PACIFIC', score: 0, isWinner: false },
    team2: { name: 'LOUD', code: 'LOUD', badgeClass: 'badge-loud', region: 'AMERICAS', score: 2, isWinner: true },
    veto: 'PRX ban Haven; LOUD ban Bind; PRX pick Sunset; LOUD pick Ascent.',
    maps: [
      { map: 'Sunset', pick: 'PRX Pick', score: '10 - 13', winner: 'LOUD' },
      { map: 'Ascent', pick: 'LOUD Pick', score: '9 - 13', winner: 'LOUD' }
    ],
    mvp: { player: 'luk xo', team: 'LOUD', acs: 287, kd: '45/28' }
  },

  {
    id: 'ub-r2-1',
    bracket: 'upper',
    round: 'Upper Bracket - Ronde 2',
    date: 'Champions Shanghai',
    format: 'BO3',
    team1: { name: 'G2 Esports', code: 'G2', badgeClass: 'badge-g2', region: 'AMERICAS', score: 0, isWinner: false },
    team2: { name: 'Team Vitality', code: 'VIT', badgeClass: 'badge-vit', region: 'EMEA', score: 2, isWinner: true },
    veto: 'G2 ban Sunset; VIT ban Ascent; G2 pick Bind; VIT pick Lotus.',
    maps: [
      { map: 'Bind', pick: 'G2 Pick', score: '11 - 13', winner: 'Team Vitality' },
      { map: 'Lotus', pick: 'VIT Pick', score: '8 - 13', winner: 'Team Vitality' }
    ],
    mvp: { player: 'Jammpi', team: 'Team Vitality', acs: 259, kd: '39/26' }
  },
  {
    id: 'ub-r2-2',
    bracket: 'upper',
    round: 'Upper Bracket - Ronde 2',
    date: 'Champions Shanghai',
    format: 'BO3',
    team1: { name: 'NRG', code: 'NRG', badgeClass: 'badge-nrg', region: 'AMERICAS', score: 1, isWinner: false },
    team2: { name: 'LOUD', code: 'LOUD', badgeClass: 'badge-loud', region: 'AMERICAS', score: 2, isWinner: true },
    veto: 'NRG ban Split; LOUD ban Haven; NRG pick Lotus; LOUD pick Sunset; Abyss remains.',
    maps: [
      { map: 'Lotus', pick: 'NRG Pick', score: '13 - 10', winner: 'NRG' },
      { map: 'Sunset', pick: 'LOUD Pick', score: '9 - 13', winner: 'LOUD' },
      { map: 'Abyss', pick: 'Decider', score: '10 - 13', winner: 'LOUD' }
    ],
    mvp: { player: 'tkzin', team: 'LOUD', acs: 248, kd: '51/41' }
  },

  {
    id: 'ub-final',
    bracket: 'upper',
    round: 'Upper Bracket - Final',
    date: 'Champions Shanghai',
    format: 'BO3',
    team1: { name: 'Team Vitality', code: 'VIT', badgeClass: 'badge-vit', region: 'EMEA', score: 1, isWinner: false },
    team2: { name: 'LOUD', code: 'LOUD', badgeClass: 'badge-loud', region: 'AMERICAS', score: 2, isWinner: true },
    veto: 'VIT ban Ascent; LOUD ban Bind; VIT pick Haven; LOUD pick Sunset; Lotus remains.',
    maps: [
      { map: 'Haven', pick: 'VIT Pick', score: '13 - 9', winner: 'Team Vitality' },
      { map: 'Sunset', pick: 'LOUD Pick', score: '8 - 13', winner: 'LOUD' },
      { map: 'Lotus', pick: 'Decider', score: '11 - 13', winner: 'LOUD' }
    ],
    mvp: { player: 'Darker', team: 'LOUD', acs: 276, kd: '59/43' }
  },

  {
    id: 'grand-final',
    bracket: 'grand',
    round: 'Final',
    date: 'Champions Shanghai • Grand Final',
    format: 'BO5',
    team1: { name: 'LOUD', code: 'LOUD', badgeClass: 'badge-loud', region: 'AMERICAS', score: 3, isWinner: true },
    team2: { name: 'Team Vitality', code: 'VIT', badgeClass: 'badge-vit', region: 'EMEA', score: 1, isWinner: false },
    veto: 'LOUD ban Haven; VIT ban Ascent; LOUD pick Sunset; VIT pick Lotus; LOUD pick Bind; VIT pick Abyss.',
    maps: [
      { map: 'Sunset', pick: 'LOUD Pick', score: '13 - 8', winner: 'LOUD' },
      { map: 'Lotus', pick: 'VIT Pick', score: '10 - 13', winner: 'Team Vitality' },
      { map: 'Bind', pick: 'LOUD Pick', score: '13 - 9', winner: 'LOUD' },
      { map: 'Abyss', pick: 'VIT Pick', score: '13 - 10', winner: 'LOUD' }
    ],
    mvp: { player: 'tkzin (Finals MVP)', team: 'LOUD', acs: 284, kd: '78/51' }
  },

  {
    id: 'lb-r1-1',
    bracket: 'lower',
    round: 'Lower Bracket - Ronde 1',
    date: 'Champions Shanghai',
    format: 'BO3',
    team1: { name: '100 Thieves', code: '100T', badgeClass: 'badge-100t', region: 'AMERICAS', score: 2, isWinner: true },
    team2: { name: 'NONGSHIM REDFORCE', code: 'NS', badgeClass: 'badge-ns', region: 'PACIFIC', score: 1, isWinner: false },
    veto: '100T ban Sunset; NS ban Ascent; 100T pick Haven; NS pick Bind; Lotus remains.',
    maps: [
      { map: 'Haven', pick: '100T Pick', score: '13 - 8', winner: '100 Thieves' },
      { map: 'Bind', pick: 'NS Pick', score: '11 - 13', winner: 'NONGSHIM REDFORCE' },
      { map: 'Lotus', pick: 'Decider', score: '13 - 7', winner: '100 Thieves' }
    ],
    mvp: { player: 'Timotino', team: '100 Thieves', acs: 252, kd: '49/36' }
  },
  {
    id: 'lb-r1-2',
    bracket: 'lower',
    round: 'Lower Bracket - Ronde 1',
    date: 'Champions Shanghai',
    format: 'BO3',
    team1: { name: 'T1', code: 'T1', badgeClass: 'badge-t1', region: 'PACIFIC', score: 2, isWinner: true },
    team2: { name: 'Paper Rex', code: 'PRX', badgeClass: 'badge-prx', region: 'PACIFIC', score: 1, isWinner: false },
    veto: 'T1 ban Sunset; PRX ban Haven; T1 pick Lotus; PRX pick Bind; Abyss remains.',
    maps: [
      { map: 'Lotus', pick: 'T1 Pick', score: '13 - 10', winner: 'T1' },
      { map: 'Bind', pick: 'PRX Pick', score: '9 - 13', winner: 'Paper Rex' },
      { map: 'Abyss', pick: 'Decider', score: '13 - 8', winner: 'T1' }
    ],
    mvp: { player: 'iZu', team: 'T1', acs: 266, kd: '54/38' }
  },

  {
    id: 'lb-r2-1',
    bracket: 'lower',
    round: 'Lower Bracket - Ronde 2',
    date: 'Champions Shanghai',
    format: 'BO3',
    team1: { name: 'NRG', code: 'NRG', badgeClass: 'badge-nrg', region: 'AMERICAS', score: 0, isWinner: false },
    team2: { name: '100 Thieves', code: '100T', badgeClass: 'badge-100t', region: 'AMERICAS', score: 2, isWinner: true },
    veto: 'NRG ban Sunset; 100T ban Split; NRG pick Haven; 100T pick Lotus.',
    maps: [
      { map: 'Haven', pick: 'NRG Pick', score: '9 - 13', winner: '100 Thieves' },
      { map: 'Lotus', pick: '100T Pick', score: '7 - 13', winner: '100 Thieves' }
    ],
    mvp: { player: 'Asuna', team: '100 Thieves', acs: 271, kd: '41/25' }
  },
  {
    id: 'lb-r2-2',
    bracket: 'lower',
    round: 'Lower Bracket - Ronde 2',
    date: 'Champions Shanghai',
    format: 'BO3',
    team1: { name: 'G2 Esports', code: 'G2', badgeClass: 'badge-g2', region: 'AMERICAS', score: 2, isWinner: true },
    team2: { name: 'T1', code: 'T1', badgeClass: 'badge-t1', region: 'PACIFIC', score: 1, isWinner: false },
    veto: 'G2 ban Haven; T1 ban Sunset; G2 pick Bind; T1 pick Lotus; Ascent remains.',
    maps: [
      { map: 'Bind', pick: 'G2 Pick', score: '13 - 7', winner: 'G2 Esports' },
      { map: 'Lotus', pick: 'T1 Pick', score: '10 - 13', winner: 'T1' },
      { map: 'Ascent', pick: 'Decider', score: '13 - 9', winner: 'G2 Esports' }
    ],
    mvp: { player: 'valyn', team: 'G2 Esports', acs: 247, kd: '48/35' }
  },

  {
    id: 'lb-sf',
    bracket: 'lower',
    round: 'Lower Bracket - Semifinal',
    date: 'Champions Shanghai',
    format: 'BO3',
    team1: { name: '100 Thieves', code: '100T', badgeClass: 'badge-100t', region: 'AMERICAS', score: 2, isWinner: true },
    team2: { name: 'G2 Esports', code: 'G2', badgeClass: 'badge-g2', region: 'AMERICAS', score: 1, isWinner: false },
    veto: '100T ban Sunset; G2 ban Ascent; 100T pick Haven; G2 pick Bind; Lotus remains.',
    maps: [
      { map: 'Haven', pick: '100T Pick', score: '13 - 11', winner: '100 Thieves' },
      { map: 'Bind', pick: 'G2 Pick', score: '8 - 13', winner: 'G2 Esports' },
      { map: 'Lotus', pick: 'Decider', score: '13 - 10', winner: '100 Thieves' }
    ],
    mvp: { player: 'Cryocells', team: '100 Thieves', acs: 269, kd: '57/42' }
  },

  {
    id: 'lb-final',
    bracket: 'lower',
    round: 'Lower Bracket - Final',
    date: 'Champions Shanghai',
    format: 'BO5',
    team1: { name: 'Team Vitality', code: 'VIT', badgeClass: 'badge-vit', region: 'EMEA', score: 3, isWinner: true },
    team2: { name: '100 Thieves', code: '100T', badgeClass: 'badge-100t', region: 'AMERICAS', score: 1, isWinner: false },
    veto: 'VIT ban Ascent; 100T ban Sunset; VIT pick Haven; 100T pick Lotus; VIT pick Bind; 100T pick Abyss.',
    maps: [
      { map: 'Haven', pick: 'VIT Pick', score: '13 - 9', winner: 'Team Vitality' },
      { map: 'Lotus', pick: '100T Pick', score: '10 - 13', winner: '100 Thieves' },
      { map: 'Bind', pick: 'VIT Pick', score: '13 - 8', winner: 'Team Vitality' },
      { map: 'Abyss', pick: '100T Pick', score: '13 - 11', winner: 'Team Vitality' }
    ],
    mvp: { player: 'Derke', team: 'Team Vitality', acs: 282, kd: '74/52' }
  }
];

const groupStageDataShanghai = [
  {
    group: 'Group A',
    teams: [
      { name: '100 Thieves', code: '100T', badgeClass: 'badge-100t', region: 'AMERICAS', record: '2 - 0', status: 'Advanced to Playoffs' },
      { name: 'T1', code: 'T1', badgeClass: 'badge-t1', region: 'PACIFIC', record: '2 - 1', status: 'Advanced to Playoffs' },
      { name: 'FUT Esports', code: 'FUT', badgeClass: 'badge-fut', region: 'EMEA', record: '1 - 2', status: 'Eliminated' },
      { name: 'JD Gaming', code: 'JDG', badgeClass: 'badge-jdg', region: 'CN', record: '0 - 2', status: 'Eliminated' }
    ]
  },
  {
    group: 'Group B',
    teams: [
      { name: 'Team Vitality', code: 'VIT', badgeClass: 'badge-vit', region: 'EMEA', record: '2 - 0', status: 'Advanced to Playoffs' },
      { name: 'LOUD', code: 'LOUD', badgeClass: 'badge-loud', region: 'AMERICAS', record: '2 - 1', status: 'Advanced to Playoffs' },
      { name: 'Global Esports', code: 'GE', badgeClass: 'badge-ge', region: 'PACIFIC', record: '1 - 2', status: 'Eliminated' },
      { name: 'EDward Gaming', code: 'EDG', badgeClass: 'badge-edg', region: 'CN', record: '0 - 2', status: 'Eliminated' }
    ]
  },
  {
    group: 'Group C',
    teams: [
      { name: 'Paper Rex', code: 'PRX', badgeClass: 'badge-prx', region: 'PACIFIC', record: '2 - 0', status: 'Advanced to Playoffs' },
      { name: 'G2 Esports', code: 'G2', badgeClass: 'badge-g2', region: 'AMERICAS', record: '2 - 1', status: 'Advanced to Playoffs' },
      { name: 'Team Liquid', code: 'TL', badgeClass: 'badge-tl', region: 'EMEA', record: '1 - 2', status: 'Eliminated' },
      { name: 'TYLOO', code: 'TYL', badgeClass: 'badge-tyl', region: 'CN', record: '0 - 2', status: 'Eliminated' }
    ]
  },
  {
    group: 'Group D',
    teams: [
      { name: 'NRG', code: 'NRG', badgeClass: 'badge-nrg', region: 'AMERICAS', record: '2 - 0', status: 'Advanced to Playoffs' },
      { name: 'Nongshim RedForce', code: 'NS', badgeClass: 'badge-ns', region: 'PACIFIC', record: '2 - 1', status: 'Advanced to Playoffs' },
      { name: 'Karmine Corp', code: 'KC', badgeClass: 'badge-kc', region: 'EMEA', record: '1 - 2', status: 'Eliminated' },
      { name: 'Xi Lai Gaming', code: 'XLG', badgeClass: 'badge-xlg', region: 'CN', record: '0 - 2', status: 'Eliminated' }
    ]
  }
];

function TeamRow({ team }) {
  return (
    <div className={`team-row ${team.isWinner ? 'winner' : ''}`}>
      <div className="team-left">
        <span className={`team-badge ${team.badgeClass || ''}`}>{team.code}</span>
        <span className="team-name">{team.name}</span>
      </div>
      <span className="team-score">{team.score}</span>
    </div>
  );
}

function MatchCard({ match, searchQuery, onSelectMatch }) {
  const isHighlighted =
    searchQuery.trim() !== '' &&
    (match.team1.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      match.team1.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      match.team2.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      match.team2.code.toLowerCase().includes(searchQuery.toLowerCase()));

  const isGrandFinal = match.bracket === 'grand';

  return (
    <div
      onClick={() => onSelectMatch(match)}
      className={`match-card ${isHighlighted ? 'highlighted' : ''} ${
        isGrandFinal ? 'grand-final' : ''
      }`}
    >
      <div className="match-top-meta">
        <span>{match.date}</span>
        <span>{match.format}</span>
      </div>
      <TeamRow team={match.team1} />
      <TeamRow team={match.team2} />
    </div>
  );
}

function MatchDetailModal({ match, onClose }) {
  if (!match) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>

        <div className="modal-header">
          <div className="modal-round">
            {match.round} • {match.format}
          </div>
          <p style={{ fontSize: '0.82rem', color: '#8b97a4', marginTop: '4px' }}>
            {match.date}
          </p>
        </div>

        <div className="modal-scoreboard">
          <div className="modal-team">
            <span className={`team-badge ${match.team1.badgeClass || ''}`}>{match.team1.code}</span>
            <h3 style={{ marginTop: '6px' }}>{match.team1.name}</h3>
            <span>{match.team1.region}</span>
          </div>

          <div className="modal-vs-score">
            {match.team1.score} - {match.team2.score}
          </div>

          <div className="modal-team">
            <span className={`team-badge ${match.team2.badgeClass || ''}`}>{match.team2.code}</span>
            <h3 style={{ marginTop: '6px' }}>{match.team2.name}</h3>
            <span>{match.team2.region}</span>
          </div>
        </div>

        <div className="veto-box">
          <strong style={{ color: '#ece8e1' }}>Map Veto:</strong> {match.veto}
        </div>

        <div className="map-breakdown-list">
          {match.maps.map((m, idx) => (
            <div key={idx} className="map-card-row">
              <div>
                <strong>
                  Map {idx + 1}: {m.map}
                </strong>
                <span className="map-pick-tag">({m.pick})</span>
              </div>
              <div>
                <span style={{ marginRight: '10px', fontWeight: '700' }}>{m.score}</span>
                <span style={{ color: '#ff4655', fontWeight: '700', fontSize: '0.85rem' }}>
                  {m.winner}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mvp-banner">
          <div>
            <span style={{ fontSize: '0.75rem', color: '#8b97a4', display: 'block' }}>
              MATCH MVP
            </span>
            <strong style={{ fontSize: '1.05rem', color: '#fff' }}>
              {match.mvp.player} ({match.mvp.team})
            </strong>
          </div>
          <div style={{ textAlign: 'right', fontSize: '0.85rem' }}>
            <div>
              ACS: <strong style={{ color: '#ff4655' }}>{match.mvp.acs}</strong>
            </div>
            <div>K/D: {match.mvp.kd}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PlayoffBracketView({ matches, searchQuery, onSelectMatch }) {
  const filterRound = (roundName) => matches.filter((m) => m.round === roundName);

  return (
    <div className="container">
      <div className="champion-banner">
        <div className="champion-info">
          <span className="trophy-icon">🏆</span>
          <div className="champion-text">
            <h3>Champions Shanghai Winner: LOUD</h3>
            <p>Mengalahkan Team Vitality 3–1 di Final • Finals MVP: tkzin</p>
          </div>
        </div>
        <span style={{ fontSize: '0.82rem', color: '#8b97a4' }}>
          Klik kartu pertandingan untuk detail map & MVP
        </span>
      </div>

      <div className="section-header">
        <h2>Upper Bracket & Final</h2>
      </div>
      <div className="bracket-scroll">
        <div className="bracket-column">
          <div className="round-label">Ronde 1</div>
          <div className="round-matches">
            {filterRound('Ronde 1').map((m) => (
              <MatchCard
                key={m.id}
                match={m}
                searchQuery={searchQuery}
                onSelectMatch={onSelectMatch}
              />
            ))}
          </div>
        </div>

        <div className="bracket-column">
          <div className="round-label">Upper Bracket - Ronde 2</div>
          <div className="round-matches">
            {filterRound('Upper Bracket - Ronde 2').map((m) => (
              <MatchCard
                key={m.id}
                match={m}
                searchQuery={searchQuery}
                onSelectMatch={onSelectMatch}
              />
            ))}
          </div>
        </div>

        <div className="bracket-column">
          <div className="round-label">Upper Bracket - Final</div>
          <div className="round-matches">
            {filterRound('Upper Bracket - Final').map((m) => (
              <MatchCard
                key={m.id}
                match={m}
                searchQuery={searchQuery}
                onSelectMatch={onSelectMatch}
              />
            ))}
          </div>
        </div>

        <div className="bracket-column">
          <div className="round-label gold">Final</div>
          <div className="round-matches">
            {filterRound('Final').map((m) => (
              <MatchCard
                key={m.id}
                match={m}
                searchQuery={searchQuery}
                onSelectMatch={onSelectMatch}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="section-header">
        <h2>Lower Bracket</h2>
      </div>
      <div className="bracket-scroll">
        <div className="bracket-column">
          <div className="round-label">Lower Bracket - Ronde 1</div>
          <div className="round-matches">
            {filterRound('Lower Bracket - Ronde 1').map((m) => (
              <MatchCard
                key={m.id}
                match={m}
                searchQuery={searchQuery}
                onSelectMatch={onSelectMatch}
              />
            ))}
          </div>
        </div>

        <div className="bracket-column">
          <div className="round-label">Lower Bracket - Ronde 2</div>
          <div className="round-matches">
            {filterRound('Lower Bracket - Ronde 2').map((m) => (
              <MatchCard
                key={m.id}
                match={m}
                searchQuery={searchQuery}
                onSelectMatch={onSelectMatch}
              />
            ))}
          </div>
        </div>

        <div className="bracket-column">
          <div className="round-label">Lower Bracket - Semifinal</div>
          <div className="round-matches">
            {filterRound('Lower Bracket - Semifinal').map((m) => (
              <MatchCard
                key={m.id}
                match={m}
                searchQuery={searchQuery}
                onSelectMatch={onSelectMatch}
              />
            ))}
          </div>
        </div>

        <div className="bracket-column">
          <div className="round-label">Lower Bracket - Final</div>
          <div className="round-matches">
            {filterRound('Lower Bracket - Final').map((m) => (
              <MatchCard
                key={m.id}
                match={m}
                searchQuery={searchQuery}
                onSelectMatch={onSelectMatch}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function GroupStageView({ groups, searchQuery }) {
  return (
    <div className="container">
      <div className="section-header">
        <h2>Group Stage Standings</h2>
      </div>

      <div className="swiss-grid">
        {groups.map((grp, index) => (
          <div key={index} className="swiss-card">
            <h3>{grp.group}</h3>
            {grp.teams.map((t, i) => {
              const isMatch =
                searchQuery.trim() !== '' &&
                (t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  t.code.toLowerCase().includes(searchQuery.toLowerCase()));

              const isAdvanced = t.status === 'Advanced to Playoffs';

              return (
                <div
                  key={i}
                  className="swiss-team-item"
                  style={{
                    border: isMatch ? '1px solid #e5b85c' : '1px solid transparent'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span className={`team-badge ${t.badgeClass || ''}`}>{t.code}</span>
                    <strong>{t.name}</strong>
                    <span style={{ fontSize: '0.75rem', color: '#8b97a4' }}>({t.region})</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ fontWeight: '600' }}>{t.record}</span>
                    <span className={isAdvanced ? 'status-adv' : 'status-elim'}>
                      {t.status}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  const [matches] = useState(playoffsDataShanghai);
  const [groups] = useState(groupStageDataShanghai);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMatch, setSelectedMatch] = useState(null);

  return (
    <Router>
      <header className="navbar">
        <div className="brand">
          <span className="brand-badge">CHAMPIONS SHANGHAI</span>
          <div className="brand-title">
            <h1>VCT Bracket</h1>
            <span>Group Stage • Playoff</span>
          </div>
        </div>

        <div className="nav-controls">
          <div className="tab-group">
            <NavLink
              to="/"
              end
              className={({ isActive }) => `tab-btn ${isActive ? 'active' : ''}`}
            >
              Playoff Bracket
            </NavLink>
            <NavLink
              to="/groups"
              className={({ isActive }) => `tab-btn ${isActive ? 'active' : ''}`}
            >
              Group Stage
            </NavLink>
          </div>

          <div className="search-box">
            <input
              type="text"
              className="search-input"
              placeholder="Cari tim (LOUD, VIT, 100T, G2)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </header>

      <Routes>
        <Route
          path="/"
          element={
            <PlayoffBracketView
              matches={matches}
              searchQuery={searchQuery}
              onSelectMatch={setSelectedMatch}
            />
          }
        />
        <Route
          path="/groups"
          element={<GroupStageView groups={groups} searchQuery={searchQuery} />}
        />
      </Routes>

      <MatchDetailModal
        match={selectedMatch}
        onClose={() => setSelectedMatch(null)}
      />
    </Router>
  );
}