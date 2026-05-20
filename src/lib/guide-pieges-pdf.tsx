import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Link,
  Svg,
  Path,
  Circle,
} from "@react-pdf/renderer";
import {
  GUIDE_TITLE,
  GUIDE_SUBTITLE,
  GUIDE_INTRO_PARAGRAPHS,
  GUIDE_CONCLUSION,
  GUIDE_CONTACT_LINES,
  SEVERITY_LABEL,
  piegePdfSections,
} from "./guide-pieges-content";

const COLORS = {
  midnight: "#0c1220",
  charcoal: "#1f2430",
  steel: "#7a7f8a",
  silver: "#a8aebd",
  cloud: "#e6e1d6",
  ivory: "#f7f4ee",
  amber: "#f59e0b",
  amberDark: "#a3640d",
  white: "#ffffff",
  danger: "#dc2626",
  warning: "#f59e0b",
  electric: "#3b82f6",
};

const SEVERITY_COLOR: Record<string, string> = {
  critique: COLORS.danger,
  important: COLORS.warning,
  attention: COLORS.electric,
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: COLORS.white,
    paddingTop: 56,
    paddingBottom: 56,
    paddingHorizontal: 56,
    fontSize: 10.5,
    color: COLORS.charcoal,
    fontFamily: "Helvetica",
    lineHeight: 1.55,
  },

  // Cover page
  coverPage: {
    backgroundColor: COLORS.midnight,
    color: COLORS.white,
    padding: 64,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  coverTopRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  coverBrand: {
    color: COLORS.white,
    fontSize: 14,
    fontFamily: "Helvetica-Bold",
    letterSpacing: 1.2,
  },
  coverBadge: {
    color: COLORS.amber,
    fontSize: 8.5,
    fontFamily: "Helvetica-Bold",
    letterSpacing: 1.4,
    textTransform: "uppercase",
    border: `1px solid ${COLORS.amber}`,
    paddingTop: 4,
    paddingBottom: 4,
    paddingHorizontal: 10,
    borderRadius: 4,
  },
  coverTitle: {
    color: COLORS.white,
    fontSize: 32,
    fontFamily: "Helvetica-Bold",
    lineHeight: 1.15,
    marginBottom: 18,
  },
  coverSubtitle: {
    color: COLORS.silver,
    fontSize: 12,
    fontFamily: "Helvetica",
    lineHeight: 1.55,
  },
  coverAmberRule: {
    width: 60,
    height: 3,
    backgroundColor: COLORS.amber,
    marginBottom: 24,
    marginTop: 8,
  },
  coverFooter: {
    fontSize: 9,
    color: COLORS.silver,
  },
  coverFooterStrong: {
    color: COLORS.white,
    fontFamily: "Helvetica-Bold",
    fontSize: 10,
    marginBottom: 6,
  },

  // Standard pages
  pageHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 28,
    paddingBottom: 12,
    borderBottom: `1px solid ${COLORS.cloud}`,
  },
  pageHeaderBrand: {
    fontSize: 9,
    fontFamily: "Helvetica-Bold",
    color: COLORS.midnight,
    letterSpacing: 0.8,
  },
  pageHeaderRight: {
    fontSize: 8.5,
    color: COLORS.steel,
    textTransform: "uppercase",
    letterSpacing: 1.2,
  },

  sectionLabel: {
    fontSize: 8.5,
    color: COLORS.amberDark,
    fontFamily: "Helvetica-Bold",
    textTransform: "uppercase",
    letterSpacing: 1.4,
    marginBottom: 8,
  },
  h1: {
    fontSize: 22,
    fontFamily: "Helvetica-Bold",
    color: COLORS.midnight,
    marginBottom: 14,
    lineHeight: 1.2,
  },
  h2: {
    fontSize: 16,
    fontFamily: "Helvetica-Bold",
    color: COLORS.midnight,
    marginBottom: 10,
    lineHeight: 1.25,
  },
  h3: {
    fontSize: 11,
    fontFamily: "Helvetica-Bold",
    color: COLORS.midnight,
    marginBottom: 6,
    textTransform: "uppercase",
    letterSpacing: 0.6,
  },
  paragraph: {
    fontSize: 10.5,
    color: COLORS.charcoal,
    marginBottom: 10,
    lineHeight: 1.55,
  },
  paragraphLead: {
    fontSize: 11.5,
    color: COLORS.midnight,
    marginBottom: 14,
    lineHeight: 1.5,
    fontFamily: "Helvetica-Bold",
  },

  // TOC
  tocRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    paddingTop: 10,
    paddingBottom: 10,
    borderBottom: `1px solid ${COLORS.cloud}`,
  },
  tocNumber: {
    width: 28,
    fontSize: 11,
    fontFamily: "Helvetica-Bold",
    color: COLORS.amberDark,
  },
  tocTitle: {
    flex: 1,
    fontSize: 11,
    color: COLORS.midnight,
    paddingRight: 12,
  },
  tocSeverity: {
    fontSize: 7.5,
    color: COLORS.white,
    paddingTop: 2,
    paddingBottom: 2,
    paddingHorizontal: 6,
    borderRadius: 8,
    textTransform: "uppercase",
    fontFamily: "Helvetica-Bold",
    letterSpacing: 0.6,
  },

  // Chapter
  chapterHeader: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 14,
  },
  chapterNumberCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: COLORS.midnight,
    color: COLORS.white,
    fontSize: 13,
    fontFamily: "Helvetica-Bold",
    textAlign: "center",
    paddingTop: 8,
    marginRight: 10,
  },
  chapterSeverity: {
    fontSize: 7.5,
    color: COLORS.white,
    paddingTop: 2,
    paddingBottom: 2,
    paddingHorizontal: 6,
    borderRadius: 8,
    textTransform: "uppercase",
    fontFamily: "Helvetica-Bold",
    letterSpacing: 0.6,
  },

  redFlagBlock: {
    backgroundColor: "#fef2f2",
    borderLeft: `3px solid ${COLORS.danger}`,
    padding: 12,
    marginTop: 6,
    marginBottom: 14,
  },
  checklistBlock: {
    backgroundColor: COLORS.ivory,
    border: `1px solid ${COLORS.cloud}`,
    padding: 14,
    marginTop: 4,
    marginBottom: 8,
    borderRadius: 6,
  },
  listItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 5,
  },
  listMarker: {
    width: 12,
    fontSize: 11,
    color: COLORS.amberDark,
    fontFamily: "Helvetica-Bold",
  },
  listMarkerCheck: {
    width: 14,
    height: 14,
    border: `1.5px solid ${COLORS.cloud}`,
    borderRadius: 2,
    marginRight: 8,
    marginTop: 2,
  },
  listText: {
    flex: 1,
    fontSize: 10,
    color: COLORS.charcoal,
    lineHeight: 1.5,
  },

  // CTA footer
  ctaFooter: {
    marginTop: 18,
    backgroundColor: COLORS.midnight,
    padding: 20,
    borderRadius: 6,
  },
  ctaFooterTitle: {
    color: COLORS.amber,
    fontSize: 8.5,
    fontFamily: "Helvetica-Bold",
    textTransform: "uppercase",
    letterSpacing: 1.4,
    marginBottom: 8,
  },
  ctaFooterBody: {
    color: COLORS.white,
    fontSize: 11,
    lineHeight: 1.5,
    marginBottom: 10,
  },
  ctaFooterContact: {
    color: COLORS.silver,
    fontSize: 9,
    lineHeight: 1.7,
  },

  // Page numbering
  pageNumber: {
    position: "absolute",
    bottom: 28,
    left: 0,
    right: 0,
    textAlign: "center",
    fontSize: 8,
    color: COLORS.steel,
  },
});

function Bullet({ color = COLORS.amberDark }: { color?: string }) {
  return (
    <Svg width="6" height="6" viewBox="0 0 6 6" style={{ marginTop: 5, marginRight: 6 }}>
      <Circle cx="3" cy="3" r="3" fill={color} />
    </Svg>
  );
}

function Checkbox() {
  return (
    <Svg width="10" height="10" viewBox="0 0 10 10" style={{ marginTop: 3, marginRight: 6 }}>
      <Path
        d="M0.75 0.75H9.25V9.25H0.75Z"
        stroke={COLORS.cloud}
        strokeWidth="1.2"
        fill="none"
      />
    </Svg>
  );
}

export function GuidePiegesDocument() {
  return (
    <Document
      title={GUIDE_TITLE}
      author="Be'energies"
      subject="Guide pour propriétaires belges avant un projet énergétique"
      creator="Be'energies"
    >
      {/* COVER */}
      <Page size="A4" style={{ padding: 0 }}>
        <View style={styles.coverPage}>
          <View>
            <View style={styles.coverTopRow}>
              <Text style={styles.coverBrand}>BE&apos;ENERGIES</Text>
              <Text style={styles.coverBadge}>Guide gratuit · 2026</Text>
            </View>
          </View>

          <View>
            <View style={styles.coverAmberRule} />
            <Text style={styles.coverTitle}>{GUIDE_TITLE}</Text>
            <Text style={styles.coverSubtitle}>{GUIDE_SUBTITLE}</Text>
          </View>

          <View>
            <Text style={styles.coverFooterStrong}>{GUIDE_CONTACT_LINES[0]}</Text>
            <Text style={styles.coverFooter}>{GUIDE_CONTACT_LINES[1]}</Text>
            <Text style={styles.coverFooter}>{GUIDE_CONTACT_LINES[2]}</Text>
          </View>
        </View>
      </Page>

      {/* INTRO + TOC */}
      <Page size="A4" style={styles.page}>
        <View style={styles.pageHeader}>
          <Text style={styles.pageHeaderBrand}>BE&apos;ENERGIES</Text>
          <Text style={styles.pageHeaderRight}>
            Les 7 pièges · Introduction
          </Text>
        </View>

        <Text style={styles.sectionLabel}>Avant de commencer</Text>
        <Text style={styles.h1}>Un outil de décision, pas une liste de peurs</Text>

        {GUIDE_INTRO_PARAGRAPHS.map((p, i) => (
          <Text key={i} style={i === 0 ? styles.paragraphLead : styles.paragraph}>
            {p}
          </Text>
        ))}

        <View style={{ marginTop: 24 }}>
          <Text style={styles.sectionLabel}>Sommaire</Text>
          {piegePdfSections.map((s) => (
            <View key={s.number} style={styles.tocRow} wrap={false}>
              <Text style={styles.tocNumber}>
                {String(s.number).padStart(2, "0")}
              </Text>
              <Text style={styles.tocTitle}>{s.title}</Text>
              <Text
                style={[
                  styles.tocSeverity,
                  { backgroundColor: SEVERITY_COLOR[s.severity] },
                ]}
              >
                {SEVERITY_LABEL[s.severity]}
              </Text>
            </View>
          ))}
        </View>

        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
          fixed
        />
      </Page>

      {/* ONE PAGE PER CHAPTER */}
      {piegePdfSections.map((section) => (
        <Page key={section.number} size="A4" style={styles.page}>
          <View style={styles.pageHeader} fixed>
            <Text style={styles.pageHeaderBrand}>BE&apos;ENERGIES</Text>
            <Text style={styles.pageHeaderRight}>
              Piège {String(section.number).padStart(2, "0")} / 07
            </Text>
          </View>

          <View style={styles.chapterHeader}>
            <Text style={styles.chapterNumberCircle}>
              {String(section.number).padStart(2, "0")}
            </Text>
            <Text
              style={[
                styles.chapterSeverity,
                { backgroundColor: SEVERITY_COLOR[section.severity] },
              ]}
            >
              {SEVERITY_LABEL[section.severity]}
            </Text>
          </View>

          <Text style={styles.h2}>{section.title}</Text>
          <Text style={styles.paragraph}>{section.intro}</Text>

          <Text style={styles.h3}>Signaux d&apos;alerte</Text>
          <View style={styles.redFlagBlock}>
            {section.redFlags.map((flag, i) => (
              <View key={i} style={styles.listItem} wrap={false}>
                <Bullet color={COLORS.danger} />
                <Text style={styles.listText}>{flag}</Text>
              </View>
            ))}
          </View>

          <Text style={styles.h3}>Checklist : ce que vous devez vérifier</Text>
          <View style={styles.checklistBlock}>
            {section.checklist.map((item, i) => (
              <View key={i} style={styles.listItem} wrap={false}>
                <Checkbox />
                <Text style={styles.listText}>{item}</Text>
              </View>
            ))}
          </View>

          <Text
            style={styles.pageNumber}
            render={({ pageNumber, totalPages }) =>
              `${pageNumber} / ${totalPages}`
            }
            fixed
          />
        </Page>
      ))}

      {/* FINAL CTA */}
      <Page size="A4" style={styles.page}>
        <View style={styles.pageHeader}>
          <Text style={styles.pageHeaderBrand}>BE&apos;ENERGIES</Text>
          <Text style={styles.pageHeaderRight}>Et maintenant ?</Text>
        </View>

        <Text style={styles.sectionLabel}>Avant de signer</Text>
        <Text style={styles.h1}>Faites vérifier votre devis par un ancien inspecteur</Text>

        <Text style={styles.paragraph}>
          Vous avez reçu un devis et vous voulez un avis avant de signer ?
          Envoyez-nous le document : Benoît l&apos;analyse personnellement et
          vous renvoie un retour écrit, sans pression commerciale.
        </Text>

        <Text style={styles.paragraph}>
          Vous démarrez un projet et vous voulez partir sur de bonnes bases ?
          Demandez un diagnostic énergétique gratuit. Visite sur site,
          dimensionnement basé sur votre consommation réelle, devis détaillé
          sous 48 h avec les tarifs 2026 réels de votre gestionnaire de réseau.
        </Text>

        <Text style={styles.paragraph}>{GUIDE_CONCLUSION}</Text>

        <View style={styles.ctaFooter}>
          <Text style={styles.ctaFooterTitle}>Be&apos;energies SARL</Text>
          <Text style={styles.ctaFooterBody}>
            Benoît Dezso · Fondateur, ancien inspecteur en installation
            électrique, certifié RESCERT
          </Text>
          {GUIDE_CONTACT_LINES.map((line, i) => (
            <Text key={i} style={styles.ctaFooterContact}>
              {line}
            </Text>
          ))}
          <Link
            src="https://be-energies.be/contact/"
            style={{
              color: COLORS.amber,
              fontSize: 10,
              marginTop: 8,
              fontFamily: "Helvetica-Bold",
            }}
          >
            be-energies.be/contact/
          </Link>
        </View>

        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
          fixed
        />
      </Page>
    </Document>
  );
}
