-- DropTable
PRAGMA foreign_keys=off;
ALTER TABLE "MatcherConfig" RENAME TO "MatcherCondition";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=on;
